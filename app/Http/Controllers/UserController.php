<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function GetUsers(){
        try {
            $data = users::all();
            return view()->json(['users' => $data]);

        }catch (\Exception $e){
            return response($e->getMessage());
        }
    }
}
