<?php

namespace App\Http\Controllers;

use http\Env\Response;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;


class ProductController extends Controller
{
    public function all(): JsonResponse
    {
        try {
            return response()->json(Product::with('category')->get());
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 200);
        }
    }

    public function AddEditproduct(Request $request): JsonResponse
    {
        try {

            if ($request->hasFile('image')) {
                $edited_product = Product::updateOrCreate(
                    ['id' => $request->get('id')],
                    [
                        'image' => $request->file('image')->storeAs('products', time() . '.' . $request->file('image')->getClientOriginalExtension(), 'public'),
                        'owner' => Auth::id(),
                        'category_id' => 1,
                        'name' => $request->get('name'),
                        'description' => $request->get('description'),
                        'price' => $request->get('price'),
                    ]
                );
            } else {
                $edited_product = Product::updateOrCreate(
                    ['id' => $request->get('id')],
                    [
                        'owner' => Auth::id(),
                        'category_id' => 1,
                        'name' => $request->get('name'),
                        'description' => $request->get('description'),
                        'price' => $request->get('price'),
                    ]
                );
            }


            return response()->json($edited_product);
        } catch (\Throwable $e) {
            return response()->json($e->getMessage(), 200);
        }
    }

    public function GetProduct(): JsonResponse
    {
        try {
            return response()->json(Product::with('owner')->get());
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 200);
        }
    }
    public function GetSingleProduct($id): JsonResponse
    { //$id =  $request->get('id');

        try {
            return response()->json(Product::with('category')->find($id));
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 200);
        }
    }

    public function DeleteProduct(Request $request): JsonResponse
    {
        $id =  $request->get('id');
        // return response()->json($id);
        try {

            $product = Product::find($id);


            $product->delete();

            //            return response()->json('The post successfully deleted');
            return response()->json(Product::with('owner')->get());
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }
}
