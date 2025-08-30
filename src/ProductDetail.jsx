import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Shield, Truck, Heart } from 'lucide-react';
import axios from 'axios';

export default function ProductDetail() {
  const { id } = useParams(); // This gets the :id from the URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Fetch all product data and find the specific product
    axios.get('/data.json')
      .then((res) => {
        // Search through all categories to find the product by ID
        const allProducts = [
          ...res.data.laptops,
          ...res.data.phones,
          ...res.data.accessories
        ];
        
        const foundProduct = allProducts.find(item => item.id === parseInt(id));
        setProduct(foundProduct);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Products
        </button>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src={`/${product.img}`}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
                {!product.instock && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">(4.8/5 - 124 reviews)</span>
                  </div>
                </div>
                
                <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                  <Heart className="w-6 h-6" />
                </button>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">${product.price}</span>
                <span className="ml-3 text-lg text-gray-500 line-through">
                  ${(product.price * 1.2).toFixed(2)}
                </span>
                <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                  Save 20%
                </span>
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                {product.instock ? (
                  <span className="flex items-center text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    In Stock - Ready to Ship
                  </span>
                ) : (
                  <span className="flex items-center text-red-600">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    Out of Stock
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Quantity Selector */}
              {product.instock && (
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border border-gray-300 rounded-lg min-w-[60px] text-center">
                      {quantity}
                    </span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col space-y-4 mb-8">
                {product.instock ? (
                  <>
                    <button 
                      onClick={handleAddToCart}
                      className="w-full bg-blue-600 text-white py-4 px-8 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Add to Cart - ${(product.price * quantity).toFixed(2)}
                    </button>
                    <button className="w-full bg-gray-900 text-white py-4 px-8 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                      Buy Now
                    </button>
                  </>
                ) : (
                  <button 
                    disabled
                    className="w-full bg-gray-400 text-white py-4 px-8 rounded-xl font-semibold cursor-not-allowed"
                  >
                    Currently Unavailable
                  </button>
                )}
              </div>

              {/* Features */}
              <div className="border-t pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">2-Year Warranty</p>
                      <p className="text-sm text-gray-500">Full coverage</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Truck className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Free Shipping</p>
                      <p className="text-sm text-gray-500">Orders over $100</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Star className="w-6 h-6 text-yellow-500" />
                    <div>
                      <p className="font-medium text-gray-900">Top Rated</p>
                      <p className="text-sm text-gray-500">4.8/5 stars</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}