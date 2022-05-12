<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
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
    Route::post('/add-new-products/AddEditproduct',[ProductController::class,'AddEditproduct']);

    // oder
    Route::post('/orders/getOrders',[OrdersController::class,'getOrders']);
    Route::put('/orders/updateOrderStatus/{id}',[OrdersController::class,'UpdateOrder']);
    Route::put('/orders/updateOrderStatus/{id}',[OrdersController::class,'UpdateOrder']);

    Route::get('/dashboard/DisplayAllOrder',[OrdersController::class,'DisplayAllOrder']);





    Route::get('/product-list/GetProduct',[ProductController::class,'GetProduct']);

    Route::post('/add-new-users/AddEditUser', [UserController::class,'AddEditUser']);
    Route::delete('/product-list/DeleteProduct',[ProductController::class,'DeleteProduct']);
    Route::post('/dashboard/GetFinishOrder', [OrdersController::class,'GetFinishOrder']);
    Route::delete('/user-details/DeleteUser',[UserController::class,'DeleteUser']);

});

Route::get('/product/GetSingleProduct/{id}',[ProductController::class,'GetSingleProduct']);
Route::get('/category/GetCategories',[CategoryController::class,'GetCategories']);



