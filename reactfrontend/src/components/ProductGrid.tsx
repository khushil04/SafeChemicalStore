import React from 'react';
import { AlertCircle } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import toast from 'react-hot-toast';

const products = [
  {
    id: 1,
    name: 'Sulfuric Acid',
    concentration: '98%',
    grade: 'Technical Grade',
    price: 249.99,
    moq: '20L',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=400',
    hazard: 'Corrosive'
  },
  {
    id: 2,
    name: 'Hydrochloric Acid',
    concentration: '37%',
    grade: 'ACS Grade',
    price: 189.99,
    moq: '25L',
    image: 'https://th.bing.com/th/id/OIP.QhtoBCi0IOff7vVqD0N1iwHaE7?w=296&h=197&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    hazard: 'Corrosive'
  },
  {
    id: 3,
    name: 'Sodium Hydroxide',
    concentration: '99%',
    grade: 'Industrial Grade',
    price: 159.99,
    moq: '25kg',
    image: 'https://th.bing.com/th/id/OIP.vAcQyub55yx7MaQ1lBg-uAHaF4?w=202&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    hazard: 'Caustic'
  },
  {
    id: 4,
    name: 'Nitric Acid',
    concentration: '70%',
    grade: 'Technical Grade',
    price: 299.99,
    moq: '20L',
    image: 'https://image.shutterstock.com/z/stock-photo-nitric-acid-in-bottle-chemical-in-the-laboratory-and-industry-2161868079.jpg',
    hazard: 'Oxidizer'
  }
];

export default function ProductGrid() {
  const addItem = useCartStore(state => state.addItem);

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      concentration: product.concentration,
    });
    toast.success(`₹{product.name} added to cart`);

  };

  return (
    <div className="bg-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {product.hazard}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <div className="space-y-1 text-sm text-gray-600 mb-4">
                  <p>Concentration: {product.concentration}</p>
                  <p>Grade: {product.grade}</p>
                  <p>MOQ: {product.moq}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">₹{product.price}</span>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}