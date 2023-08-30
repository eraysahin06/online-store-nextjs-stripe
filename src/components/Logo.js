import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href={'/'} className="flex items-center space-x-2">
      <h2 className="font-extrabold text-3xl inline-block  border-4 border-cyan-600 rounded-xl p-2 text-gray-700">
        ErayStore
      </h2>
    </Link>
  );
};

export default Logo;
