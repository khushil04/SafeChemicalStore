<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('small_orders', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email');
            $table->string('phone', 20);
            $table->text('address');
            $table->string('city');       
            $table->string('state');     
            $table->string('zip_code');   
            $table->enum('payment_method', ['Credit Card', 'Bank Transfer', 'Purchase Order', 'UPI']);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('small_orders');
    }
};
