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
                'password' => 'required|confirmed',
                'role' => 'required|string|in:buyer,seller'
            ]);


            User::create([
                'name' => $request->get('name'),
                'email' => $request->get('email'),
                'password' => Hash::make($request->get('password')),
                'role' => $request->get('role')
            ]);

            return response()->json(['status'=>'Success!']);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function Login(Request $request): JsonResponse
    {
        if (User::where('email', $request->get('email'))->exists()) {
            if (Auth::attempt(['email' => $request->get('email'),'password' => $request->get('password')])){
                Auth::user()->tokens()->delete();
                return response()->json([
                    'status' => 'success',
                    'message' => 'User logged in successfully',
                    'token'=> Auth::user()->createToken(Auth::id())->plainTextToken,
                    'user' => Auth::user(),
                ]);
            }else{
                return response()->json([
                    'status' => 'error',
                    'message' => 'Invalid password'
                ]);
            }
        } else {
            return response()->json(['error' => 'user not found'], 401);
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
