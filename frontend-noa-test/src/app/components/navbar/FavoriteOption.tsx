import { FavoriteProduct } from '@/app/products/interfaces/favorites-product.interface'
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    product: FavoriteProduct
}
export const FavoriteOption = ({ product }: Props) => {
    return (
        <DropdownMenuItem key={product.id} className={
            `px-2 h-[100px] py-4 cursor-pointer hover:bg-gray-100 transition-all duration-150  border-b border-gray-200 `
        }>
            <Link href={`/products/${product.id}`} className="flex items-center gap-3 h-full">
                <Image
                    src={product?.url}
                    alt={product.name}
                    width={60}
                    height={100}
                    className="rounded object-cover"
                />
                <span className="text-lg font-semibold">{product.name}</span>
            </Link>
        </DropdownMenuItem>
    )
}