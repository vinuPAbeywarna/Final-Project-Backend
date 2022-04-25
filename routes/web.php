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

Route::get('/shops', function () {
    return view('App');
})->name('Shops');

Route::get('/dashboard', function () {
    return view('App');
})->name('Dashboard');

Route::get('/product-list', function () {
    return view('App');
})->name('ProductList');

Route::get('/orders', function () {
    return view('App');
})->name('Orders');

Route::get('/tracking-details', function () {
    return view('App');
})->name('TrackingDetails');

Route::get('/settings', function () {
    return view('App');
})->name('Settings');

Route::get('/add-new-products', function () {
    return view('App');
})->name('AddNewProducts');

Route::get('/leather-item-shop', function () {
    return view('App');
})->name('leatherItemShop');

Route::get('/checkout-page', function () {
    return view('App');
})->name('CheckoutPage');

Route::get('/art-and-craft-kit-shop', function () {
    return view('App');
})->name('ArtAndCraftKitsShop');

Route::get('/art-and-craft-shop', function () {
    return view('App');
})->name('ArtAndCraftShop');






