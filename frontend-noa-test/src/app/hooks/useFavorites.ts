import { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { axiosFree } from '@/app/config/axios';
import { ShortProduct } from '../products/interfaces/short-product.interface';
import { useUser } from './useUser';

export const useFavorites = () => {
    const { user } = useUser();

    const query = useCallback(async () => {
        try {

            const route = '/favorites/' + user;

            const { data: { data } } = await axiosFree.get(`${route}`);

            if (Array.isArray(data) && data.length) {
                let url = process.env.NEXT_PUBLIC_STRAPI_BASE_API
                    + '/api/products?fields[0]=name&fields[1]=frontImage'
                for (let index = 0; index < data.length; index++) {
                    const id = data[index];
                    url = url + '&filters[id][$in][' + index + ']=' + id;
                }
                const response = await axiosFree.get(`${url}`);
                return response.data.data as ShortProduct[];
            }
            return [];
        } catch (e) {
            toast.error('Error al buscar favoritos');
            throw new Error(`${e}`);
        }
    }, [user]);

    const { isPending, isError, data, refetch } = useQuery(
        {
            queryKey: ['getFavorites', user],
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
