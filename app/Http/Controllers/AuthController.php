<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function Register(Request $request):JsonResponse
    {

        try {
            $this->validate($request, [
                'name' => 'required',
                'email' => 'required|email',
                'password' => 'required|alpha_num|between:4,8|confirmed',//'required|confirmed',
                'nic' =>'required',
                'contact_no' =>'required',
                'city' =>'required',
                'birthday' =>'required',
                'gender' =>'required',
                'address' =>'required',
                'role' => 'required|string|in:buyer,seller'
            ]);


            User::create([
                'name' => $request->get('name'),
                'email' => $request->get('email'),
                'password' => Hash::make($request->get('password')),
                'nic' => $request->get('nic'),
                'contact_no'=>$request->get('contact_no'),
                'city'=>$request->get('city'),
                'address'=>$request->get('address'),
                'birthday'=>$request->get('birthday'),
                'gender'=>$request->get('gender'),
                'role' => $request->get('role')
            ]);

            return response()->json(['status'=>'Success!']);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function Login(Request $request): JsonResponse
    {
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $token = auth()->attempt([
            'email' => $request->get('email'),
            'password' => $request->get('password')
        ]);

        if (!$token) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        } else {
            return response()->json([
                'status' => 'success',
                'message' => 'User logged in successfully',
                'user' => auth()->user(),
                'token'=> $token,
            ]);
        }

    }

    public function Check(): JsonResponse
    {
        return response()->json([
            'status' => 'success',
            'message' => 'Authentication Validated successfully',
            'user' => Auth::user(),
        ]);
    }
}
