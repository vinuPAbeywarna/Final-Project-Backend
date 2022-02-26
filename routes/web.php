<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('App');
})->name('App');

Route::get('/auth', function () {
    return view('App');
})->name('Auth');
