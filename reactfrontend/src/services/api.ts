import axios from 'axios';

const API_BASE = 'http://localhost:8000/api'; // Your Laravel API base URL

// Bulk order data shape
export interface OrderData {
  company_name: string;
  contact_person: string;
  email: string;
  phone: string;
  product: string;
  quantity_required: string;
  delivery_date: string;
  additional_comments?: string;
}

// Contact form data shape
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Define allowed payment methods as a type
export type PaymentMethod = 'Credit Card' | 'Bank Transfer' | 'Purchase Order' | 'UPI';

// Small order data shape
export interface SmallOrderData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  payment_method: PaymentMethod;
  
}

// Place a bulk order
export const placeBulkOrder = (orderData: OrderData) => {
  return axios.post(`${API_BASE}/bulkorders`, orderData);
};

// Submit the contact form
export const submitContact = (formData: ContactFormData) => {
  return axios.post(`${API_BASE}/contact`, formData);
};

// Place a small order
export const placeSmallOrder = (orderData: SmallOrderData) => {
  return axios.post(`${API_BASE}/smallorders`, orderData);
};
