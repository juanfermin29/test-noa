'use client'
import React, { useEffect, useState } from 'react';
import { ShortProduct } from '../interfaces/short-product.interface';
import { EmblaOptionsType } from 'embla-carousel';
import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';
import { ProductCard } from './ProductCard';
import { Spinner } from '@/app/components/spinner/Spinner';

const OPTIONS: EmblaOptionsType = { loop: false };

export const ProductsCarousel = () => {
  const [products, setProducts] = useState<ShortProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [emblaRef,] = useEmblaCarousel(OPTIONS, [
    AutoScroll({ playOnInit: true, speed: 0.5, stopOnFocusIn: true })
  ]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_STRAPI_BASE_API +'/api/products?' +
          'fields[0]=name&fields[1]=price&fields[2]=createdAt&fields[3]=frontImage&' +
          'pagination[page]=1&pagination[pageSize]=10'
        );

        const data = await res.json();
        setProducts(data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="w-full  overflow-x-hidden">
      <div className='my-10'><span className='text-5xl font-bold'>Recomendados para ti</span></div>

      <div className="embla overflow-visible pb-2" ref={emblaRef}>
        <div className="embla__container flex gap-8 pl-4">
          {products?.map((product) => (
            <div
              key={product.id}
              className="embla__slide min-w-[300px] flex-shrink-0"
            >
              <ProductCard className="mx-auto" products={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};