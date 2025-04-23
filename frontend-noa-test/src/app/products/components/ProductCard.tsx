import React from 'react'
import { ShortProduct } from '../interfaces/short-product.interface'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
    products: ShortProduct;
    className?: string
}
export const ProductCard = ({ products, className }: Props) => {
    return (
        <Link href={`/products/${products.id}`} key={products.id} className="group">
            <div className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl ${className}`}>
                <div className="relative h-48 w-full border[">
                    <Image
                        src={process.env.NEXT_PUBLIC_STRAPI_BASE_API + products.attributes.frontImage.data.attributes.url}
                        alt={products.attributes.name}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                        {products.attributes.name}
                    </h3>
                    <div className="flex justify-between items-center">
                        <p className="text-emerald-600 font-bold">${products.attributes.price.toFixed(2)}</p>
                        <p className="text-sm text-gray-500">
                            <span className='mx-2'>Última actualización: </span>
                            {new Date(products.attributes.createdAt).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
