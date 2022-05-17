<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Vinuri',
            'email' => 'admin@vam.lk',
            'password' => Hash::make('password'),
            'role' => 'admin',
            'nic'=>'0000',
            'contact_no'=>'1234',
            'city'=>'Colombo',
            'address'=>'Homagama',
            'birthday'=>'1999/00/00',
            'gender'=>'Female',
        ]);

        User::create([
            'name' => 'Test Seller',
            'email' => 'seller@vam.lk',
            'password' => Hash::make('password'),
            'role' => 'seller',
            'nic'=>'0000',
            'contact_no'=>'1234',
            'city'=>'Colombo',
            'address'=>'Homagama',
            'birthday'=>'1999/00/00',
            'gender'=>'Female',
        ]);

        Category::insert([
            'Category_name' => 'T-Shirts',
            'image' => '/Images/default/categories/1.jpeg'
        ]);

        Product::create([
            'owner' => 1,
            'name' => "XINYI Men's T-shirt 100% cotton",
            'price' => 100,
            'description' => 'Something',
            'image' => 'Images/default/products/1.jpeg',
            'approved' => 1,
            'category_id' => 1
        ]);

        Product::create([
            'owner' => 1,
            'name' => "TEEHUB Promotion Cookie Men T-Shirt",
            'price' => 200,
            'description' => 'Something',
            'image' => 'Images/default/products/2.jpeg',
            'approved' => 1,
            'category_id' => 1
        ]);
    }
}
