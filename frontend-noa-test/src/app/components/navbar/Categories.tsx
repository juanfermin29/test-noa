import Link from 'next/link';
import React from 'react';
import { Category } from './interfaces/category.interface';

async function getCategories(): Promise<Category[]> {
  const res = await fetch(process.env.NEXT_PUBLIC_FIND_CATEGORIES!);
  const data = await res.json();
  console.log("")
  return data.data; 
}

export const Categories = async () => {
  const categories = await getCategories();

  return (
    <div className="border-t overflow-x-auto">
      <div className="container mx-auto px-4 grid justify-center">
        <ul className="flex space-x-6 py-3">
          {categories?.map((category) => (
            <li key={category.id}>
              <Link
                href={`/products?category=${category.attributes.name.replace(/\s+/g, '-')}`}
                className="text-sm text-gray-700 hover:text-green-600 hover:underline"
              >
                {category.attributes.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};