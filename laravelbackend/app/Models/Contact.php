<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    // use HasFactory;

    protected $table = 'contacts'; // your table name

    protected $fillable = [
        'name',
        'email',
        'subject',
        'message'
    ];
}
