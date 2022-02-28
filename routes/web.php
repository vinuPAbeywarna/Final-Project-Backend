<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('App');
})->name('App');

Route::get('/auth', function () {
    return view('App');
})->name('Auth');

Route::get('/user-profile', function () {
    return view('App');
})->name('AdminProfile');

Route::get('/seller-account-approval', function () {
    return view('App');
})->name('SellerAccountApproval');

Route::get('/user-details', function () {
    return view('App');
})->name('UserDetails');

Route::get('/cart', function () {
    return view('App');
})->name('Cart');

Route::get('/wish-list', function () {
    return view('App');
})->name('WishList');

Route::get('/products', function () {
    return view('App');
})->name('Products');


