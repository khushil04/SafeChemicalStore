// import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { TestTubes, Shield, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80')] mix-blend-overlay opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 py-24 relative">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Premium Industrial Chemicals for Your Businessnn  
          </h1>
          <p className="text-xl text-slate-300 mb-8">        
            Trusted supplier of high-grade industrial chemicals with certified quality and reliable delivery across all industries.
          </p>    
          <div className="flex flex-wrap gap-4">


            {/* Use Link component to navigate to catalog page */}
            <Link to="/products">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition">
                Browse Catalog
              </button>
            </Link>
            <Link to="/bulk-orders">
            <button className="bg-slate-700 hover:bg-slate-600 px-8 py-3 rounded-lg font-semibold transition">
              Request Quote
            </button>
            </Link>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl">
            <TestTubes className="h-10 w-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Certified Quality</h3>
            <p className="text-slate-300">All products meet strict industry standards with detailed certification.</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl">
            <Shield className="h-10 w-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Safety First</h3>
            <p className="text-slate-300">Comprehensive safety data and handling guidelines for all products.</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl">
            <Truck className="h-10 w-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-slate-300">Efficient logistics network ensuring timely delivery to your facility.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
