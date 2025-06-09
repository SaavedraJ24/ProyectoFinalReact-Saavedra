import {
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  SimpleGrid
} from "@chakra-ui/react";
import { ProductCard } from "../ProductCard";

export const ItemListContainer = ({ products }) => {
  return products.length !== 0 ? (
    <Box width={"100%"} overflowX={"hidden"} p={4}>
      <SimpleGrid columns={{ sm: 2, md:3, lg: 6 }} spacing={4} width={"100%"}></SimpleGrid>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
      <SimpleGrid/>
    </Box>
  ) : (
    <Alert status="info">
      <AlertIcon />
      <AlertTitle>No hay productos para mostrar!</AlertTitle>
      <AlertDescription>No hay productos en la lista.</AlertDescription>
    </Alert>
  );
};