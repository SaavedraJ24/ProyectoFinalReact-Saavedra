import React from 'react';
import { useProductsStore } from "../store";

export const useCustomHProductsStore = () => {
    const cartState = useProductsStore((state) => state.cart);
    const addItem = useProductsStore((state) => state.addProductToCart);
    const removeItem = useProductsStore((state) => state.removeProductFromCart);
    const deleteProductFromCart = useProductsStore((state) => state.deleteProductFromCart);
    const total = useProductsStore((state) => state.getTotalPrice());

    return { cartState, addItem, removeItem, deleteProductFromCart, total };
};