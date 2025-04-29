<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
public function store(Request $request)
    {
        // Step 1: Validate incoming request
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        // Step 2: Save validated data
        Contact::create($validatedData);

        // Step 3: Return success response
        return response()->json(['message' => 'Contact saved successfully'], 200);
    }
}

