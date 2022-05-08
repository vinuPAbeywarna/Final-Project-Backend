<?php

namespace Database\Seeders;

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
    }
}
