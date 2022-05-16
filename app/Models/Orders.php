<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Orders extends Model
{
    use HasFactory;

    protected $guarded = [];

    // Order status
    const PENDING = 0;
    const APPROVED = 1;

    // Payment methods
    const ONLINE = 1;
    const BANK_TRANSFER = 2;

    // Payment status
    const PAID = 1;
    const UNPAID = 0;

    public function seller():HasOne
    {
        return $this->hasOne(User_Sellers::class,'id','seller_id');
    }
}
