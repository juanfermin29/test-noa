import { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { axiosFree } from '@/app/config/axios';
import { useUser } from '@/app/hooks/useUser';

export const useFavorite = (productId: number) => {
    const {user} = useUser();
    const query = useCallback(async () => {
        try {
            if (!user) return;

            if (!productId || isNaN(productId)) {
                toast.error('El id del producto no es valido');
            }

            const route = '/favorites/is-favorite/' + user + '/' + productId;

            const { data } = await axiosFree.get(`${route}`);

            return data.data as boolean;
        } catch (e) {
            toast.error('Error al buscar producto');
            throw new Error(`${e}`);
        }
    }, [productId, user]);

    const { isPending, isError, data, refetch } = useQuery(
        {
            queryKey: [
                'getFavorite',
                productId,
                user
            ],
            queryFn: query,
            enabled: !!user
        }
    );

    return {
        data,
        isError,
        isPending,
        refetch,
    };
};
