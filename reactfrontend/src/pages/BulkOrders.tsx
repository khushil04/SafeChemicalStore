import React, { useState } from 'react';
import { Truck, Package, Calculator, Clock, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { placeBulkOrder } from '../services/api';

export default function BulkOrders() {
  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    deliveryDate: '',
    comments: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { company, contact, email, phone, product, quantity, deliveryDate } = formData;
    if (!company || !contact || !email || !phone || !product || !quantity || !deliveryDate) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setSubmitting(true);
    try {
      await placeBulkOrder({
        company_name: formData.company,
        contact_person: formData.contact,
        email: formData.email,
        phone: formData.phone,
        product: formData.product,
        quantity_required: formData.quantity,
        delivery_date: formData.deliveryDate,
        additional_comments: formData.comments,
      });

      toast.success('Bulk order request submitted successfully!');
      setFormData({
        company: '',
        contact: '',
        email: '',
        phone: '',
        product: '',
        quantity: '',
        deliveryDate: '',
        comments: '',
      });
    } catch (error: any) {
      console.error(error);
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || 'Failed to submit. Server error.');
      } else {
        toast.error('Failed to submit. Please check your internet connection.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const features = [
    { icon: Calculator, title: 'Volume Pricing', desc: 'Competitive rates for bulk quantities', color: 'text-blue-500' },
    { icon: Package, title: 'Custom Packaging', desc: 'Flexible packaging options available', color: 'text-green-500' },
    { icon: Truck, title: 'Direct Shipping', desc: 'Delivery to your facility', color: 'text-yellow-500' },
    { icon: Clock, title: 'Scheduled Delivery', desc: 'Regular supply scheduling', color: 'text-purple-500' },
  ];

  return (
    <div className="bg-slate-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Bulk Orders</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get competitive pricing and dedicated support for your bulk chemical orders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map(({ icon: Icon, title, desc, color }, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-center">
              <Icon className={`h-12 w-12 mb-4 mx-auto ${color}`} />
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Request Bulk Order Quote</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Company & Contact */}
            <div className="grid md:grid-cols-2 gap-6">
              <InputField label="Company Name" name="company" value={formData.company} onChange={handleChange} />
              <InputField label="Contact Person" name="contact" value={formData.contact} onChange={handleChange} />
            </div>

            {/* Email & Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
              <InputField label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
            </div>

            {/* Product & Quantity */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product</label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select a product</option>
                  <option value="sulfuric-acid">Sulfuric Acid</option>
                  <option value="hydrochloric-acid">Hydrochloric Acid</option>
                  <option value="nitric-acid">Nitric Acid</option>
                  <option value="sodium-hydroxide">Sodium Hydroxide</option>
                </select>
              </div>
              <InputField label="Quantity Required" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="e.g., 1000L" />
            </div>

            {/* Delivery Date */}
            <InputField label="Desired Delivery Date" name="deliveryDate" type="date" value={formData.deliveryDate} onChange={handleChange} />

            {/* Comments */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Comments</label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200 disabled:opacity-60"
              disabled={submitting}
            >
              {submitting && <Loader2 className="animate-spin w-5 h-5" />}
              {submitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Reusable InputField Component
function InputField({
  label,
  name,
  value,
  onChange,
  type = 'text',
  placeholder = '',
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
        required
      />
    </div>
  );
}
