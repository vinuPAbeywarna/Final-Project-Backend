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

    public function GetFinishOrder ():JsonResponse
    {
        try {
            $data = Orders::where('status', '=', 'confirm')->get();
           $order =Orders::all();
            return response()->json(['orders' =>$data,'orders'=>$order]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], 200);
        }
    }


    public function UpdateOrder($id): JsonResponse
    {
        try {

            $oder=Orders::find($id);
            $oder->update([
                    'status'=>true,
                ]

            );

            return  response()->json(
            ['status: ok']  ,200);

        } catch (\Exception $e){
            return response()->json([
                'error'=>$e->getMessage()
            ],400);
        }
    }


    public function getOrdersHistory(): JsonResponse
    {
        try{
            $data = Orders::orderBy('status','desc')->get();


            return response()->json(['orders' =>$data]);

        }catch (\Exception $e) {
            return response()->json($e->getMessage(), 200);
//                'orders'=>Orders::with('seller')->get()

        }
    }

    public function DisplayAllOrder():JsonResponse
    {
        try {
            $counter = Orders::count('id')->get();
            return response()->json(['orders' => $counter]);
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 200);
        }
    }


}
