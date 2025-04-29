<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

use App\Http\Controllers\BulkOrderController;
use App\Http\Controllers\SmallOrderController;


Route::post('/contact', [ContactController::class, 'store']);
Route::post('/bulkorders', [BulkOrderController::class, 'store']);

Route::post('/smallorders', [SmallOrderController::class, 'store']);
