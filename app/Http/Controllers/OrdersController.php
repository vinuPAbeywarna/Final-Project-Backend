<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\OrderProduct;
use App\Models\Orders;
use http\Client\Response;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Carbon\Carbon;

class OrdersController extends Controller
{
    public function getOrders(): JsonResponse
    {
        try {
            $data = Orders::orderByDesc('id')->get();
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 200);
        }
    }



    public function createOrder(Request $request): JsonResponse
    {
        try {
            $order = Orders::create($request->all());
            $cart = Cart::whereUserId(auth()->user()->id);
            collect($cart->get())->each(function ($item) use ($order) {
                OrderProduct::create([
                    'order_id' => $order->id,
                    'product_id' => $item->product_id,
                    'quantity' => $item->qty
                ]);
            });
            $cart->delete();
            return response()->json($order);
        } catch (\Exception $e) {
            return response()->json($e->getMessage());
        }
    }

    public function GetFinishOrder(): JsonResponse
    {
        try {
            $data = Orders::where('status', '=', 'confirm')->get();
            $order = Orders::all();
            return response()->json(['orders' => $data, 'orders' => $order]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], 200);
        }
    }


    public function UpdateOrder($id): JsonResponse
    {
        try {

            $order = Orders::find($id);
            $order->update(['status' => Orders::APPROVED]);
            $orders = Orders::orderByDesc('id')->get();
            return  response()->json($orders);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], 400);
        }
    }

    public function updatePaymentStatus($id): JsonResponse
    {
        try {

            $order = Orders::find($id);
            $order->update(['is_paid' => Orders::PAID]);
            $orders = Orders::orderByDesc('id')->get();
            return  response()->json($orders);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], 400);
        }
    }

    public function getOrdersHistory(): JsonResponse
    {
        try {
            $data = Orders::whereUserId(auth()->user()->id)->orderByDesc('id')->get();
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 200);
        }
    }

    public function displayAllSales(): JsonResponse
    {
        try {
            $counter = Orders::where('is_paid', 1)->get();
            return response()->json($counter);
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 200);
        }
    }

    public function getDaySales(): JsonResponse
    {
        try {
            $data = Orders::where('created_at', '>=', Carbon::now()->subDay())->where('is_paid', 1)->pluck('total');
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 200);
        }
    }
}
