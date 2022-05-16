<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreWishListRequest;
use App\Models\WishList;
use Illuminate\Http\Request;

class WishListController extends Controller
{
    private WishList $wishlist;

    public function __construct(WishList $wishlist)
    {
        $this->wishlist = $wishlist;
    }

    public function all()
    {
        try {
            $wishlist = $this->wishlist->with('product')->whereUserId(auth()->user()->id)->get();
            return response()->json($wishlist);
        } catch (\Exception $e) {
            return response()->json($e->getMessage());
        }
    }

    public function store(StoreWishListRequest $request)
    {
        try {
            $wishlistItem = $this->wishlist->whereUserId(auth()->user()->id)->whereProductId($request->product_id);
            if (!$wishlistItem->exists()) {
                $this->wishlist->create($request->all());
            }
            return response()->json('success');
        } catch (\Exception $e) {
            return response()->json($e->getMessage());
        }
    }

    public function destroy(Wishlist $wishlist)
    {
        try {
            $wishlist->delete();
            $wishlist = $this->wishlist->with('product')->whereUserId(auth()->user()->id)->get();
            return response()->json($wishlist);
        } catch (\Exception $e) {
            return response()->json($e->getMessage());
        }
    }
}
