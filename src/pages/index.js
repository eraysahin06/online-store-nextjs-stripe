import Image from 'next/image';
import { Inter } from 'next/font/google';
import { stripe } from 'src/utils/stripe';
import ProductCard from 'src/components/ProductCard';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ products }) {
  return (
    <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
      <div className="grid gap-8 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const inventory = await stripe.products.list({
    expand: ['data.default_price'],
    limit: 8,
  });
  const products = inventory.data.map((product) => {
    const price = product.default_price;
    return {
      currency: price.currency,
      id: product.id,
      name: product.name,
      price: price.unit_amount,
      image: product.images[0],
    };
  });
  return {
    props: { products },
  };
}
