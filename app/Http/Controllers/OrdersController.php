<?php

namespace App\Http\Controllers;

use App\Models\Orders;
use http\Client\Response;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class OrdersController extends Controller
{
    public function getOrders(): JsonResponse
    {
        try{
            $data = Orders::all();
            return response()->json(['users' =>$data]);
        }catch (\Exception $e) {
            return response()->json($e->getMessage(), 200);
//                'orders'=>Orders::with('seller')->get()

        }
        }



    public function createOrder(Request $request): JsonResponse
    {
        try {
            Orders::create([
                'order_id'=> $request->get('order_id'),
                'user_id' => $request->get('user_id'),
            ]);
        } catch (\Exception $e){
            return response()->json([
                'error'=>$e->getMessage()
            ],200);
        }
    }
}
