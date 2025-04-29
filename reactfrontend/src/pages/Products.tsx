import React, { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AlertCircle } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import SearchBar from '../components/SearchBar';
import toast from 'react-hot-toast';

// Mock data - replace with actual API call in production
const mockProducts = [
  {
    id: 1,
    name: 'Sulfuric Acid',
    concentration: '98%',
    grade: 'Technical Grade',
    price: 249.99,
    moq: '20L',
    image: 'https://th.bing.com/th/id/OIP._-7IL72vP5JJL1J0WZE2XgHaE7?w=291&h=193&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    hazard: 'Corrosive',
    description: 'High-purity sulfuric acid for industrial applications'
  },
  {
    id: 2,
    name: 'Hydrochloric Acid',
    concentration: '37%',
    grade: 'ACS Grade',
    price: 189.99,
    moq: '25L',
    image: 'https://th.bing.com/th/id/OIP.QhtoBCi0IOff7vVqD0N1iwHaE7?w=296&h=197&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    hazard: 'Corrosive',
    description: 'Premium quality hydrochloric acid for laboratory use'
  },
  {
    id: 3,
    name: 'Sodium Hydroxide',
    concentration: '99%',
    grade: 'Industrial Grade',
    price: 159.99,
    moq: '25kg',
    image: 'https://th.bing.com/th/id/OIP.vAcQyub55yx7MaQ1lBg-uAHaF4?w=202&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    hazard: 'Caustic',
    description: 'Pure sodium hydroxide pellets for industrial processes'
  },
  {
    id: 4,
    name: 'Nitric Acid',
    concentration: '70%',
    grade: 'Technical Grade',
    price: 299.99,
    moq: '20L',
    image: 'https://image.shutterstock.com/z/stock-photo-nitric-acid-in-bottle-chemical-in-the-laboratory-and-industry-2161868079.jpg',
    hazard: 'Oxidizer',
    description: 'High-strength nitric acid for metal processing'
  },
  {
    id: 5,
    name: 'Phosphoric Acid',
    concentration: '85%',
    grade: 'Food Grade',
    price: 219.99,
    moq: '20L',
    image: 'https://th.bing.com/th/id/R.a2da6b24dce2e8af6b30715d5fbb6843?rik=bLvwT0dd8SQH0Q&riu=http%3a%2f%2fadmin.first-labs.com%2fProductImageUpload%2f2020%2f03%2f24%2f3F-AC-37-43-71-49-5C-41-BC-E9-5A-DC-5E-1A-72-62.jpg&ehk=5QOmZpk4WVdWeXcJQQCqzsVT2XF8Bg9YUwSN839UcOs%3d&risl=&pid=ImgRaw&r=0',
    hazard: 'Corrosive',
    description: 'Food-grade phosphoric acid for various applications'
  },
  {
    id: 6,
    name: 'Potassium Hydroxide',
    concentration: '90%',
    grade: 'Technical Grade',
    price: 179.99,
    moq: '25kg',
    image: 'https://th.bing.com/th/id/OIP.xCgNVIKSPr-elVZvwUoRPgHaHa?pid=ImgDet&w=200&h=200&c=7&dpr=1.1',
    hazard: 'Caustic',
    description: 'High-purity potassium hydroxide for industrial use'
  }
];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const addItem = useCartStore(state => state.addItem);

  // Replace with actual API call in production
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => Promise.resolve(mockProducts),
  });

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    return products.filter(product => {
      const searchString = `₹{product.name} ₹{product.grade} ₹{product.concentration} ₹{product.description}`.toLowerCase();
      return searchString.includes(searchTerm.toLowerCase());
    });
  }, [products, searchTerm]);

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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our extensive collection of high-quality industrial chemicals
          </p>
        </div>

        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-600">No products found</h2>
            <p className="text-gray-500 mt-2">Try adjusting your search terms</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
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
                  <p className="text-gray-600 text-sm mb-3">{product.description}</p>
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
        )}
      </div>
    </div>
  );
}