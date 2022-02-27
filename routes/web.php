<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('App');
})->name('App');

Route::get('/auth', function () {
    return view('App');
})->name('Auth');

Route::get('/admin-profile', function () {
    return view('App');
})->name('AdminProfile');

Route::get('/seller-account-approval', function () {
    return view('App');
})->name('SellerAccountApproval');

Route::get('/user-details', function () {
    return view('App');
})->name('UserDetails');


