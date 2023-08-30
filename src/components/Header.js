import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';

const Header = () => {
  return (
    <header className=" bg-white z-10 sticky top-0 shadow">
      <div className="container p-6 mx-auto flex justify-between">
        <Logo />
        <Link
          href={'/cart'}
          className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
        >
          <div className="relative">
            <FiShoppingCart className="w-7 h-7 flex-shrink-0" />
          </div>
          <p className="text-lg">
            $0.00 <span className="text-sm text-gray-500">(0)</span>
          </p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
