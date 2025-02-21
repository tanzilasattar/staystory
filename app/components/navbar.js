"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full max-w-[1440px] h-[112px] mx-auto relative">
      <div className="flex items-center justify-between h-full">
        {/* logo section */}
        <div className="absolute left-20 top-10">
          <Link href="/">
            <Image 
              src="/images/logo.png" 
              alt="Logo" 
              width={110} 
              height={31.15}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex absolute left-[542px] top-[47px] w-[355px] h-[18px] items-center">
          <div className="flex space-x-10"> 
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

        {/* Right Section*/}
        <div className="hidden md:flex absolute right-20 top-10 w-[211px] h-8 items-center">
          <div className="flex items-center space-x-6"> {/* gap: 24px */}
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
              className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm whitespace-nowrap text-center"
            >
              sign in
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden absolute right-4 top-10 p-2 hover:bg-gray-100 rounded-full"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-gray-600" />
          ) : (
            <Menu size={24} className="text-gray-600" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-[112px] left-0 right-0 bg-white shadow-lg md:hidden z-50">
            <div className="flex flex-col p-4">
              <Link href="/our-work" className="py-3 text-gray-600 hover:text-gray-900">
                our work
              </Link>
              <Link href="/about-us" className="py-3 text-gray-600 hover:text-gray-900">
                about us
              </Link>
              <Link href="/join-us" className="py-3 text-gray-600 hover:text-gray-900">
                join us
              </Link>
              <Link href="/press" className="py-3 text-gray-600 hover:text-gray-900">
                press
              </Link>
              
              <div className="flex items-center space-x-4 pt-4 mt-4 border-t">
                <button className="p-2 hover:bg-gray-100 rounded-full">
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