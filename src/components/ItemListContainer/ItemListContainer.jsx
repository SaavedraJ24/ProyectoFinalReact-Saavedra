import { Box } from "@chakra-ui/react"
import { ProductCard } from "../ProductCard"

export const ItemListContainer = ({products}) => {
    return (
        <Box w="100%" display={"flex"} maxW={"100vw"}>
            {products.map((product) => {
                return <ProductCard key={product.id} product={product} />
            })}
        </Box>
    );
};