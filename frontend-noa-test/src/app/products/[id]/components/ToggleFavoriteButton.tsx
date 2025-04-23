'use client'
import { Heart } from 'lucide-react';
import React from 'react'
import { useFavorite } from '../../hooks/useFavorite';
import { useHandleFavorite } from '../../hooks/useHandleFavorite';
import { useDispatch } from 'react-redux';
import { removeFavorite, addFavorite as addFavoriteAction } from '@/app/config/redux/favorite.slice';
import { ProductLong } from '../../interfaces/long-product.interface';

interface Props {
    product: ProductLong;
}

export const ToggleFavoriteButton = ({ product }: Props) => {

    const { addFavorite, deleteFavorite } = useHandleFavorite();
    const { data: isFavorite, isPending, refetch } = useFavorite(product.id);
    const dispatch = useDispatch();

    const handleToggleFavorite = async () => {
        if (isFavorite) {
            await deleteFavorite.mutateAsync({ productId: product.id });
            dispatch(removeFavorite(product.id))
        } else {
            await addFavorite.mutateAsync({ productId: product.id });
            dispatch(addFavoriteAction({
                id: product.id,
                name: product.attributes.name,
                url: product.attributes.frontImage,
            }))
        }
        await refetch();
    };

    if (isPending)
        return <></>

    return (
        <div
            onClick={async () => {
                await handleToggleFavorite()
            }}
            className={`absolute -top-[61px] rounded-t-xl right-0  p-2 transition-all duration-150
            ${isFavorite ? 'bg-red-500 text-white' : 'bg-slate-800 border-b  text-white'}
        `}>
            <button
                disabled={isPending || deleteFavorite.isPending || addFavorite.isPending}
                type='button'
                title={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
                aria-label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
                className='cursor-pointer z-10'
            >
                <Heart
                    size={40} width={100}
                    className={`cursor-pointer  text-white fill-white `}
                    strokeWidth={2}
                />
            </button>
        </div>
    )
}
