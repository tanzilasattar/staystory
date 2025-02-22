"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#FAF7F0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[80px] lg:h-[112px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image 
                src="https://writeful.ly/wp-content/themes/writefully/writeful/img/logo.svg" 
                alt="Logo" 
                width={110} 
                height={31.15}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Show on medium and large screens */}
          <div className="hidden md:flex items-center justify-center flex-1 ml-10">
            <div className="flex space-x-6 lg:space-x-10">
              <Link href="/our-work" className="text-gray-600 hover:text-gray-900">
                our work
              </Link>
              <Link href="/about-us" className="text-gray-600 hover:text-gray-900">
                about us
              </Link>
              <Link href="/join-us" className="text-gray-600 hover:text-gray-900">
                join us
              </Link>
              <Link href="/press" className="text-gray-600 hover:text-gray-900">
                press
              </Link>
            </div>
          </div>

          {/* Desktop Right Section - Show on medium and large screens */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search size={20} className="text-gray-600" />
            </button>
            <Link 
              href="/login" 
              className="px-4 py-2 bg-black text-white rounded-full text-sm"
            >
              login
            </Link>
            <Link 
              href="/signin" 
              className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm whitespace-nowrap"
            >
              sign in
            </Link>
          </div>

          {/* Mobile Menu Button - Show only on small screens */}
          <div className="md:hidden">
            <button 
              className="p-2 hover:bg-gray-200 rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-gray-600" />
              ) : (
                <Menu size={24} className="text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Show only on small screens when menu is open */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#FAF7F0] border-t border-gray-200">
            <div className="px-4 pt-2 pb-3 space-y-2">
              <Link 
                href="/our-work" 
                className="block py-2 text-gray-600 hover:text-gray-900"
              >
                our work
              </Link>
              <Link 
                href="/about-us" 
                className="block py-2 text-gray-600 hover:text-gray-900"
              >
                about us
              </Link>
              <Link 
                href="/join-us" 
                className="block py-2 text-gray-600 hover:text-gray-900"
              >
                join us
              </Link>
              <Link 
                href="/press" 
                className="block py-2 text-gray-600 hover:text-gray-900"
              >
                press
              </Link>
              
              <div className="mt-4 pt-4 border-t border-gray-200 flex items-center space-x-4">
                <button className="p-2 hover:bg-gray-200 rounded-full">
                  <Search size={20} className="text-gray-600" />
                </button>
                <Link 
                  href="/login" 
                  className="flex-1 px-4 py-2 bg-black text-white rounded-full text-sm text-center"
                >
                  login
                </Link>
                <Link 
                  href="/signin" 
                  className="flex-1 px-4 py-2 text-gray-600 hover:text-gray-900 text-sm text-center"
                >
                  sign in
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;