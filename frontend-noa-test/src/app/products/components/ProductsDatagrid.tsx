import React from 'react';
import { ShortProduct } from '../interfaces/short-product.interface';
import { ProductCard } from './ProductCard';

interface ProductResponse {
  data: ShortProduct[];
}

async function getProducts(category?: string): Promise<ShortProduct[]> {
  if (category) {
    category = category.replace(/-/g, ' ');
  }
  const url = `${process.env.NEXT_PUBLIC_STRAPI_BASE_API}/api/products?fields[0]=name&fields[1]=price&fields[2]=createdAt&populate[frontImage][fields][0]=url&populate[frontImage][fields][1]=alternativeText&${category && 'filters[categories][name][$eq]=' + category}`
  const res = await fetch(url);
  const data: ProductResponse = await res.json();
  return data.data;
}


export const ProductsDatagrid = async ({ category }: { category?: string }) => {
  const products = await getProducts(category);

  return (
    <>
      <div className='mt-20 mb-10'><span className='text-5xl font-bold '>Todos los cursos {category && `#${category}`}</span></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6">

        {products.map((product) => (
          <ProductCard key={product.id} products={product} />
        ))}
      </div>
    </>
  );
};