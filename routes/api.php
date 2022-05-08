<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::post('/auth/login', [AuthController::class,'Login']);
Route::post('/auth/register', [AuthController::class,'Register']);

Route::group(['middleware' => ['auth:api']], function () {
    Route::post('/auth/check', [AuthController::class,'Check']);
    Route::get('/user-details/GetUsers', [UserController::class,'GetUsers']);
//    Route::get('/orders/actions/get-all',[OrdersController::class,'getOrders']);
    Route::post('/add-new-products/SaveData',[ProductController::class,'SaveData']);
    Route::post('/orders/getOrders',[OrdersController::class,'getOrders']);
    Route::get('/product-list/GetProduct',[ProductController::class,'GetProduct']);
    Route::post('/add-new-users/AddEditUser', [UserController::class,'AddEditUser']);
});





