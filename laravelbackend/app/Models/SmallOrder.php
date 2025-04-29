<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SmallOrder extends Model
{
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'address',
        'city',  
        'state', 
        'zip_code', 
        'payment_method',
    ];
}

