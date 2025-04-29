<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BulkOrder extends Model
{
    // use HasFactory;

    protected $table = 'bulk_orders'; // explicitly mentioning (optional)

    protected $fillable = [
        'company_name',
        'contact_person',
        'email',
        'phone',
        'product',
        'quantity_required',
        'delivery_date',
        'additional_comments'
    ];
}
