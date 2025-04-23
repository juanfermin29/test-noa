'use client';
import { Heart } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FavoriteOption } from './FavoriteOption';
import { useFavorites } from "@/app/hooks/useFavorites"
import { useEffect } from "react"
import { setFavorites } from '@/app/config/redux/favorite.slice';
import { FavoriteProduct } from '@/app/products/interfaces/favorites-product.interface';
import { DropdownMenu } from "radix-ui";
import "@radix-ui/themes/styles.css";
import "../../globals.css";

export const FavoritesDropdown = () => {
    const { data } = useFavorites();
    const dispatch = useDispatch();
    useEffect(() => {
        if (data) {
            dispatch(setFavorites(data))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]) 

    const { products } = useSelector((state: { favorites: { products: FavoriteProduct[] } }) => state.favorites);

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger  asChild>
                <Heart size={40} width={100} />
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    align="end"
                    className="w-[500px] bg-white rounded-md shadow-lg overflow-hidden will-change-[opacity,transform]"
                    sideOffset={10}
                >
                    <div className="p-4 text-2xl font-semibold border-b border-gray-200">
                        Mis cursos favoritos
                    </div>

                    <div className="max-h-[400px] overflow-y-auto">
                        {products.length > 0 ? (
                            products.map((product) => (
                                <DropdownMenu.Item asChild key={product.id}>
                                    <FavoriteOption product={product} />
                                </DropdownMenu.Item>
                            ))
                        ) : (
                            <div className="p-4 text-center text-gray-500">
                                No tienes cursos favoritos aún
                            </div>
                        )}
                    </div>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}
