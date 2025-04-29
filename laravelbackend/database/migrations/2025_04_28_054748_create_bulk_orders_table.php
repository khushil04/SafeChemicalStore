<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bulk_orders', function (Blueprint $table) {
            $table->id();
            $table->string('company_name', 100);
            $table->string('contact_person', 100);
            $table->string('email', 100);
            $table->string('phone', 10);
            $table->string('product', 100);
            $table->bigInteger('quantity_required');
            $table->date('delivery_date');
            $table->string('additional_comments', 200)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bulk_orders');
    }
};
