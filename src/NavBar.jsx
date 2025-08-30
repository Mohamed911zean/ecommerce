import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Home, Info, Smartphone, Laptop, Headphones, ChevronDown, Cpu } from 'lucide-react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { name: 'Home', icon: Home, href: '#' },
    { name: 'About', icon: Info, href: '#' },
    { 
      name: 'Products', 
      icon: Smartphone, 
      href: '#',
      dropdown: ['Smartphones', 'Laptops', 'Tablets', 'Accessories', 'Gaming']
    },
    { 
      name: 'Categories', 
      icon: Laptop, 
      href: '#',
      dropdown: ['Apple', 'Samsung', 'Dell', 'HP', 'Asus', 'Sony']
    },
    { name: 'Contact', icon: Headphones, href: '#' }
  ];

  return (
    <>
      <nav className="p-4 bg-white sticky top-0 z-50 ">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <div className="hidden sm:flex items-center">
                    <span className="text-gray-900 font-bold text-2xl tracking-tight">ByteBox</span>
                    <span className="text-blue-600 font-bold text-2xl ml-1">Pro</span>
                  </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-2">
                  {navLinks.map((link, index) => (
                    <div key={index} className="relative group">
                      <button
                        className="flex items-center space-x-1 px-4 py-2 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                        onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <link.icon className="w-4 h-4" />
                        <span className="font-medium">{link.name}</span>
                        {link.dropdown && (
                          <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                        )}
                      </button>
                      
                      {/* Dropdown Menu */}
                      {link.dropdown && activeDropdown === link.name && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
                          {link.dropdown.map((item, idx) => (
                            <a
                              key={idx}
                              href="#"
                              className="block px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors first:rounded-t-xl last:rounded-b-xl"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Search Bar */}
                <div className="hidden md:flex items-center bg-gray-50 rounded-xl px-4 py-2 border border-gray-200 focus-within:border-blue-300 focus-within:bg-white transition-colors max-w-xs">
                  <Search className="w-4 h-4 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Search electronics..."
                    className="bg-transparent text-gray-900 placeholder-gray-500 text-sm focus:outline-none flex-1"
                  />
                </div>

                {/* Right Side Icons */}
                <div className="flex items-center space-x-3">
                  <button className="relative p-2 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200">
                    <ShoppingCart className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center font-medium">3</span>
                  </button>
                  
                  <button className="p-2 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200">
                    <User className="w-5 h-5" />
                  </button>

                  {/* Mobile Menu Button */}
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden p-2 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                  >
                    {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Mobile Menu */}
              {isMenuOpen && (
                <div className="lg:hidden mt-4 pt-4 border-t border-gray-200">
                  <div className="space-y-2">
                    {navLinks.map((link, index) => (
                      <div key={index}>
                        <a
                          href={link.href}
                          className="flex items-center justify-between px-4 py-3 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                        >
                          <div className="flex items-center space-x-3">
                            <link.icon className="w-5 h-5" />
                            <span className="font-medium">{link.name}</span>
                          </div>
                          {link.dropdown && <ChevronDown className="w-4 h-4" />}
                        </a>
                        {link.dropdown && (
                          <div className="ml-8 space-y-1 mt-2">
                            {link.dropdown.map((item, idx) => (
                              <a
                                key={idx}
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              >
                                {item}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {/* Mobile Search */}
                    <div className="flex items-center bg-gray-50 rounded-xl px-4 py-3 border border-gray-200 mt-4">
                      <Search className="w-4 h-4 text-gray-400 mr-2" />
                      <input
                        type="text"
                        placeholder="Search electronics..."
                        className="bg-transparent text-gray-900 placeholder-gray-500 text-sm focus:outline-none flex-1"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}