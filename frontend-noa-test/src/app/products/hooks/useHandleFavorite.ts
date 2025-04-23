import { axiosFree } from "@/app/config/axios";
import { useUser } from "@/app/hooks/useUser";
import { useMutation } from "@tanstack/react-query";
import { toast } from 'react-toastify';

export const useHandleFavorite = () => {
    const { user } = useUser();
    const addFavorite = useMutation({
        mutationFn: async ({ productId }: { productId: number }) => {
            const response = await axiosFree.post(`favorites/${user}`, { productId });
            return response;
        },
        onError: () => {
            toast.error("Error al marcar como favorito");
            return;
        },
    });

    const deleteFavorite = useMutation({
        mutationFn: async ({ productId }: { productId: number }) => {
            const response = await axiosFree.delete(`favorites/${user}/${productId}`);
            return response;
        },
        onError: () => {
            toast.error("Error al marcar como favorito");
            return;
        }
    });

    return {
        addFavorite, deleteFavorite
    }

}