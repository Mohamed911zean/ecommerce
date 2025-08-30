import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { ShoppingBag, Smartphone, Laptop, Headphones, Star, ArrowRight, Zap, Shield, Truck } from 'lucide-react';

import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Accessories from './Accessories.jsx';
import Laptops from './Laptops.jsx';
import Mobiles from './Mobiles.jsx';
import ProductDetail from './ProductDetail.jsx';

const products = [
  {
    id: 17,
    name: 'MacBook Pro M4',
    description: 'Latest MacBook Pro with cutting-edge M4 chip, 16GB memory, 512GB SSD',
    image: '/pohtos/Macbook-pro-m4.jpg',
    price: 1799.99,
    discount: '15% OFF',
  },
  {
    id: 31,
    name: 'iPhone 16',
    description: 'Newest iPhone 16 with A18 chip, Camera Control button, and enhanced AI',
    image: '/pohtos/Iphone-16.jpg',
    price: 899.99,
    discount: '10% OFF',
  },
  {
    id: 73,
    name: 'Sony WH-1000XM6',
    description: 'Latest Sony headphones with improved noise cancellation and better battery',
    image: '/pohtos/sony-wh-1000xm6.jpg',
    price: 399.99,
    discount: '20% OFF',
  },
  {
    id: 2,
    name: 'ASUS ROG Strix Gaming',
    description: 'High-performance ROG Strix with AMD Ryzen 9, 32GB RAM, RTX 4070',
    image: '/pohtos/Asus-strix.jpg',
    price: 1299.99,
    discount: '25% OFF',
  },
  {
    id: 35,
    name: 'Samsung Galaxy S25 Ultra',
    description: 'Premium Galaxy S25 Ultra with S Pen, 200MP camera, cutting-edge performance',
    image: '/pohtos/Samsung-s25-ultra.jpg',
    price: 1299.99,
    discount: '18% OFF',
  },
  {
    id: 62,
    name: 'Apple Watch Series 10',
    description: 'Latest Apple Watch with advanced health monitoring and fitness tracking',
    image: '/pohtos/apple-watch-10.jpg',
    price: 399.99,
    discount: '12% OFF',
  },
];

// Home Page Component
const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full">
              <span className="text-gray-700 text-sm font-medium">Premium Electronics Store</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Gateway to
              <span className="block text-blue-600">Digital Innovation</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Discover cutting-edge technology at unbeatable prices. From the latest smartphones to powerful laptops and premium accessories, we bring you the future of electronics.
            </p>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Star className="w-6 h-6 text-blue-600 mr-2" />
                About TechHub
              </h2>

              <p className="text-gray-600">
                Founded in 2020, TechHub has become the premier destination for tech enthusiasts and professionals alike.
                We specialize in curating the finest selection of electronics, ensuring every product meets our rigorous quality standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
                <Shield className="w-6 h-6 text-green-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">Warranty</h4>
                  <p className="text-sm text-gray-500">2-year coverage</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
                <Truck className="w-6 h-6 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">Free Shipping</h4>
                  <p className="text-sm text-gray-500">Orders over $100</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
                <Star className="w-6 h-6 text-yellow-500" />
                <div>
                  <h4 className="font-semibold text-gray-900">Top Rated</h4>
                  <p className="text-sm text-gray-500">4.9/5 reviews</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center group">
                Shop Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                View Catalog
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=2070&q=80"
              alt="Modern Electronics Setup"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
            <div className="absolute -top-4 -left-4 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-900 text-sm font-medium">Live Support</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">10k+</p>
                <p className="text-sm text-gray-500">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img src="/pohtos/Iphone-16.jpg" alt="Smartphones" />
          <h2 className="text-2xl font-bold mt-2">Smartphones</h2>
          <p className="mt-2 text-gray-500 mb-3">Explore our latest smartphones with cutting-edge technology and unbeatable prices.</p>
          <Link to="/mobiles" className="text-blue-600 hover:underline">Shop Now</Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img src="/pohtos/Macbook-pro-m4.jpg" alt="Laptops" />
          <h2 className="text-2xl font-bold mt-2">Laptops</h2>
          <p className="mt-2 text-gray-500 mb-3">Discover powerful laptops designed for performance and style, perfect for work and play.</p>
          <Link to="/laptops" className="text-blue-600 hover:underline">Shop Now</Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img src="/pohtos/airpods-2nd.jpg" alt="Accessories" />
          <h2 className="text-2xl font-bold mt-2">Accessories</h2>
          <p className="mt-2 text-gray-500 mb-3">Enhance your devices with our wide range of accessories, from chargers to speakers.</p>
          <Link to="/accessories" className="text-blue-600 hover:underline">Shop Now</Link>
        </div>
      </div>

      {/* Featured Products Carousel */}
      <div className="py-10 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">🔥 Featured Products</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1.2}
          loop={true}
          speed={600}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full max-w-7xl mx-auto"
        >
          {products.map((product) => (
            <SwiperSlide
              key={product.id}
              className="bg-white rounded-xl shadow-xl p-4 transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="relative w-full h-52 mb-4 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-700 ease-in-out hover:scale-105"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow-lg">
                  {product.discount}
                </span>
              </div>
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{product.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-gray-900">${product.price}</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition duration-300">
                  Buy Now
                </button>
                <Link 
                  to={`/product/${product.id}`}
                  className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition duration-300 text-center"
                >
                  View
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter basename="/ecommerce">
      <NavBar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/mobiles" element={<Mobiles />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
