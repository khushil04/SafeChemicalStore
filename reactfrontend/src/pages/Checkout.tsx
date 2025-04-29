import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { ShoppingBag } from 'lucide-react';
import toast from 'react-hot-toast';
import { PaymentMethod, placeSmallOrder } from '../services/api'; // Only import placeSmallOrder

export default function Checkout() {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCartStore();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    paymentMethod: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await placeSmallOrder({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zip_code: formData.zipCode,
        payment_method: formData.paymentMethod as PaymentMethod,
        
      });
      toast.success('Order placed successfully!');
      clearCart();
      navigate('/');
    } catch (error: any) {
       if (error.response && error.response.data) {
        console.error('Validation Errors:', error.response.data.errors);
        toast.error('Validation error: ' + JSON.stringify(error.response.data.errors));
      } else 
      console.error('Error placing order:', error);
      toast.error('Failed to place order. Please try again.');
    }
      
      
    // } catch (error) {
    //   console.error('Error placing order:', error);
    //   toast.error('Failed to place order. Please try again.');
    // }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-6">Add some products to your cart to proceed with checkout</p>
            <button
              onClick={() => navigate('/products')}
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Browse Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Shipping Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* First & Last Name */}
                  <InputField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
                  <InputField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email & Phone */}
                  <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
                  <InputField label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="grid gap-6">
                  {/* Address */}
                  <InputField label="Address" name="address" value={formData.address} onChange={handleChange} />
                </div>
                {/* Address fields */}
                <div className="grid md:grid-cols-3 gap-6">
                  <InputField label="City" name="city" value={formData.city} onChange={handleChange} />
                  <InputField label="State" name="state" value={formData.state} onChange={handleChange} />
                  <InputField label="ZIP Code" name="zipCode" value={formData.zipCode} onChange={handleChange} />
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="Credit Card">Credit Card</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="Purchase Order">Purchase Order</option>
                    <option value="UPI">UPI</option>

                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Place Order (₹{total().toFixed(2)})
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-4 mb-4">
                {items.map(item => (
                  <div key={item.id} className="flex items-center py-4 border-b">
                    <img src={item.image} alt={item.name} className="h-16 w-16 object-cover rounded-lg" />
                    <div className="ml-4 flex-grow">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600">Concentration: {item.concentration}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">₹{item.price.toFixed(2)}</p>
                      <p className="text-sm text-gray-500">x {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total:</span>
                <span>₹{total().toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable InputField component
function InputField({
  label,
  name,
  value,
  onChange,
  type = 'text',
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
        required
      />
    </div>
  );
}
