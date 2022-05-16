<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class SellerController extends Controller
{
    private User $seller;

    public function __construct(User $seller)
    {
        $this->seller = $seller;
    }

    public function all()
    {
        try {
            $seller = $this->seller->where('role', "seller")->get();
            return response()->json($seller);
        } catch (\Exception $e) {
            return response()->json($e->getMessage());
        }
    }

    public function update(Request $request, User $seller)
    {
        try {
            $seller->update([
                'status' => $request->status
            ]);
            return response()->json($seller);
        } catch (\Exception $e) {
            return response()->json($e->getMessage());
        }
    }
}
