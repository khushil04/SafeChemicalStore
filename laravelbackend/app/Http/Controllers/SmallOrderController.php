<?php

namespace App\Http\Controllers;

use App\Models\SmallOrder;
use Illuminate\Http\Request;

class SmallOrderController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name'  => 'required|string|max:255',
            'email'      => 'required|email|max:255',
            'phone'      => 'required|string|max:20',
            'address'    => 'required|string',
            'city'       => 'required|string|max:255',  // Add this line
           'state'      => 'required|string|max:255',  // Add this line
           'zip_code'   => 'required|string|max:20',   // Add this line
            'payment_method' => 'required|in:Credit Card,Bank Transfer,Purchase Order,UPI',
        ]);

        $smallOrder = SmallOrder::create($validated);

        return response()->json([
            'message' => 'Order placed successfully!',
            'order' => $smallOrder
        ], 201);
    }
}
