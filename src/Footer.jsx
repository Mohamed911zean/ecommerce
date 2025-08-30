import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin,
  CreditCard,
  Truck,
  Shield,
  ArrowRight,
  Smartphone,
  Laptop,
  Headphones,
  Monitor
} from 'lucide-react';

export default function Footer() {
  const productCategories = [
    { name: 'Smartphones', icon: Smartphone },
    { name: 'Laptops', icon: Laptop },
    { name: 'Audio', icon: Headphones },
    { name: 'Monitors', icon: Monitor }
  ];

  const quickLinks = [
    'About Us',
    'Contact',
    'Careers',
    'Press',
    'Blog',
    'Support Center'
  ];

  const customerService = [
    'Order Tracking',
    'Returns & Exchanges',
    'Warranty',
    'Technical Support',
    'Installation Services',
    'FAQs'
  ];

  const policies = [
    'Privacy Policy',
    'Terms of Service',
    'Shipping Policy',
    'Return Policy',
    'Cookie Policy',
    'Security'
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook' },
    { icon: Twitter, name: 'Twitter' },
    { icon: Instagram, name: 'Instagram' },
    { icon: Youtube, name: 'YouTube' },
    { icon: Linkedin, name: 'LinkedIn' }
  ];

  return (
      <footer className="bg-white border-t border-gray-200">
        {/* Newsletter Section */}
        <div className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                <p className="text-gray-400">Get the latest tech deals and product launches delivered to your inbox.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">TechStore</span>
              </div>
              <p className="text-gray-600 mb-6 max-w-md">
                Your trusted partner for cutting-edge technology. We provide premium electronics, expert support, and innovative solutions for businesses and consumers worldwide.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="w-5 h-5" />
                  <span>support@techstore.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>123 Tech Avenue, Silicon Valley, CA 94043</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 bg-gray-100 hover:bg-gray-900 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200"
                  >
                    <social.icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Categories */}
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Categories</h4>
              <ul className="space-y-3">
                {productCategories.map((category, index) => (
                  <li key={index}>
                    <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                      <category.icon className="w-4 h-4" />
                      <span>{category.name}</span>
                    </a>
                  </li>
                ))}
                {quickLinks.slice(0, 2).map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Customer Service</h4>
              <ul className="space-y-3">
                {customerService.map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Legal</h4>
              <ul className="space-y-3">
                {policies.map((policy, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                      {policy}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Features Banner */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-gray-200">
            <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Truck className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-900">Free Shipping</h5>
                <p className="text-sm text-gray-600">On orders over $99</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-900">Secure Payment</h5>
                <p className="text-sm text-gray-600">100% protected transactions</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Headphones className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-900">24/7 Support</h5>
                <p className="text-sm text-gray-600">Expert customer service</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-gray-600">
                © 2025 TechStore. All rights reserved. | Built with passion for technology.
              </div>
              
              {/* Payment Methods */}
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600 mr-2">Payment methods:</span>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-6 bg-gray-200 rounded flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-gray-500" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}