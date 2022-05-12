<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function GetUsers(): JsonResponse
    {
        try {
            $data = User::all();
            return response()->json(['users' => $data]);
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 200);
        }
    }

    public function AddEditUser(Request $request): JsonResponse
    {

        try {
            User::updateOrCreate(
                ['id' => $request->get('id')],
                [
                    'name' => $request->get('name'),
                    'email' => $request->get('email'),
                    'nic' => $request->get('nic'),
                    'password' => Hash::make($request->get('password')),
                    'contact_no' => $request->get('contact_no'),
                    'city' => $request->get('city'),
                    'birthday' => $request->get('birthday'),
                    'address' => $request->get('address'),
                    'gender' => $request->get('gender'),
                    'role' => $request->get('role'),
                ]);

            return response()->json('The User successfully added');
        } catch (\Throwable $t) {
            return response()->json([
                'error' => $t->getMessage()
            ]);
        }


    }

    public function DeleteUser(Request $request):JsonResponse
    {
        $id =  $request->get('id');
        try{
            $user = User::find($id);
            $user->delete();
            return response()->json('The post successfully deleted');


        }catch (\Exception $e) {
            return response()->json($e->getMessage(),500);
        }

    }


}
