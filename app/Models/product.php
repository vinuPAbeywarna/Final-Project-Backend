<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class product extends Model
{
    use HasFactory;
    protected $guarded =[];

    public function owner():HasOne
    {
        return $this->hasOne(User::class,'id','owner');
    }
}
