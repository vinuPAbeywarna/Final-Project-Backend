<?php

namespace App\Http\Controllers;

use http\Env\Response;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\product;
use App\Http\Controllers;
use SebastianBergmann\CodeCoverage\Report\Xml\Project;


class ProductController extends Controller
{
    public function SaveData(Request $request)
    :JsonResponse{
        try{

            product::create([
            'id'=> $request->input('id'),
                'product_name' => $request->input('product_name'),
                'seller_name'=> $request->input('seller_name'),
                'address' => $request->input('address'),
                'stock'=> $request->input('stock'),
                'price' => $request->input('price'),
                'country' => $request->input('country'),
                'image' => $request->input('image'),
                ]);


            return response()->json('product created');


        }catch (\Exception $e){
            return response()->json($e->getMessage(),200);
        }
    }

    public function GetProduct():JsonResponse{
        try{
            $data = product::all();
            return response()->json(['users' => $data]);
        }catch (\Exception $e){
            return response()->json($e->getMessage(),200);
        }
    }


}
