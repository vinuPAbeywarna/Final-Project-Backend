<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    use HasFactory;
    protected $fillable =[
        'id',
        'product_name',
        'seller_name',
        'address',
        'stock',
        'price',
        'category',
        'country',
        'image'

    ];
}
