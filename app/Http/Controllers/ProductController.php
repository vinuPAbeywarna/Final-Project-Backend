<?php

namespace App\Http\Controllers;

use http\Env\Response;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\product;
use Illuminate\Support\Facades\Auth;


class ProductController extends Controller
{
    public function AddEditproduct(Request $request): JsonResponse
    {
        try {

            product::updateOrCreate(
                ['id' => $request->get('id')],
                [
                'owner' => Auth::id(),
                'name' => $request->get('name'),
                'description' => $request->get('description'),
                'price' => $request->get('price'),
            ]);


            return response()->json('Product Created');


        } catch (\Throwable $e) {
            return response()->json($e->getMessage(), 200);
        }
    }

    public function GetProduct(): JsonResponse
    {
        try {
            return response()->json(product::with('owner')->get());
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 200);
        }
    }
    public function GetSingleProduct( $id): JsonResponse
    { //$id =  $request->get('id');

        try {
            return response()->json(product::find($id));
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 200);
        }
    }

    public function DeleteProduct(Request $request):JsonResponse
    {
        $id =  $request->get('id');
       // return response()->json($id);
        try{

            $product= product::find($id);


             $product->delete();

//            return response()->json('The post successfully deleted');
            return response()->json(product::with('owner')->get());

        }catch (\Exception $e) {
            return response()->json($e->getMessage(),500);
        }
    }


}
