import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const ProductCard = ({ product }) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className="border-2 rounded-md group overflow-hidden"
    >
      <div className="relative w-full h-64">
        <Image src={product.image} alt={product.name} fill sizes={'100%'} />
      </div>
    </Link>
  );
};

export default ProductCard;
