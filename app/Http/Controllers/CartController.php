<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCartRequest;
use App\Models\Cart;

class CartController extends Controller
{
    private Cart $cart;

    public function __construct(Cart $cart)
    {
        $this->cart = $cart;
    }

    public function all()
    {
        try {
            $cart = $this->cart->with('product')->whereUserId(auth()->user()->id)->get();
            return response()->json($cart);
        } catch (\Exception $e) {
            return response()->json($e->getMessage());
        }
    }

    public function store(StoreCartRequest $request)
    {
        try {
            $cartItem = $this->cart->whereUserId(auth()->user()->id)->whereProductId($request->product_id);
            if (! $cartItem->exists()) {
                $this->cart->create($request->all());
            } else {
                $cartItem->update([
                    'qty' => $request->qty
                ]);
            }
            return response()->json('success');
        } catch (\Exception $e) {
            return response()->json($e->getMessage());
        }
    }

    public function destroy(Cart $cart)
    {
        try {
            $cart->delete();
            $cart = $this->cart->with('product')->whereUserId(auth()->user()->id)->get();
            return response()->json($cart);
        } catch (\Exception $e) {
            return response()->json($e->getMessage());
        }
    }
}
