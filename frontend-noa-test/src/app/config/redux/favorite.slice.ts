// userSlice.js
import { FavoriteProduct } from "@/app/products/interfaces/favorites-product.interface";
import { ShortProduct } from "@/app/products/interfaces/short-product.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
    products: FavoriteProduct[];
}
const initialState: FavoritesState = {
    products: [],
};

const userSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        setFavorites: (state, action:PayloadAction<ShortProduct[]>) => {
            state.products = action.payload.map(pro=> {
                return {
                    id: pro.id,
                    name: pro.attributes.name,
                    url: pro.attributes.frontImage
                }
            });
        },
        addFavorite: (state, action:PayloadAction<FavoriteProduct>) => {
            if (state.products.some(product => product.id === action.payload.id)) {
                return;
            }
            state.products.push(action.payload);
        },
        removeFavorite: (state, action:PayloadAction<number>) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        }
    },
});

export const { setFavorites, removeFavorite,addFavorite } = userSlice.actions;

export default userSlice.reducer;