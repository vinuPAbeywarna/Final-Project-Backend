<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Orders extends Model
{
    use HasFactory;
    protected $fillable =[
        'order_id',
        'item_name',
        'seller_name',
        'user_id',
        'buyer_name',
        'price',
        'quantity',
        'status'

    ];


    public function seller():HasOne
    {
        return $this->hasOne(User_Sellers::class,'id','seller_id');

    }
}
