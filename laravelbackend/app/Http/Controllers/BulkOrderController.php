<?php
namespace App\Http\Controllers;

use App\Models\BulkOrder;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class BulkOrderController extends Controller
{
    public function store(Request $request)
    { 
        // Validate the incoming data
        $validated = $request->validate([
            'company_name' => 'required|string',
            'contact_person' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'product' => 'required|string',
            'quantity_required' => 'required|string',
            'delivery_date' => 'required|date',
            'additional_comments' => 'nullable|string',
        ]);
        \Log::info('Validated:', ['data' => $validated]);

        // Create the order
        $order = BulkOrder::create($validated); // ✅ Use $validated here

        // Return a response
        return response()->json($order, 201);
    }
}
