import { Button, Flex, Text } from "@chakra-ui/react";
import { useProductsStore } from "../../store";

export const Counter = ({ product }) => {
    const addProductToCart = useProductsStore((state) => state.addProductToCart);
    const removeProductFromCart = useProductsStore((state) => state.removeProductFromCart);
    const cart = useProductsStore((state) => state.cart);

    const handleAdd = () => {
        addProductToCart(product);
        console.log(cart)
    };

    const handleRemove = () => {
        removeProductFromCart(product.id);
        console.log(cart)

    };

    return (
        <Flex alignItems={"center"} justifyContent={"center"}>
            <Button onClick={handleRemove}>-1</Button>
            <Button onClick={handleAdd}>+1</Button>
        </Flex>
    );
};