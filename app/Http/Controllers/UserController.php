<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function GetUsers():JsonResponse{
        try {
            $data = User::all();
            return response()->json(['users' => $data]);
        }catch (\Exception $e){
            return response()->json($e->getMessage(),200);
        }
    }

    public function AddUser(Request $request)
    {
        $post = new User([
            'name' => $request->input('name'),
            'role' => $request->input('role'),
            'email' => $request->input('email'),
            'contact_no' => $request->input('contact_no'),
            'city' => $request->input('city'),
        ]);
        $post->save();

        return response()->json('The User successfully added');
    }


}
