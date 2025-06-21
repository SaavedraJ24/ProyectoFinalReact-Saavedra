import { Button, Flex, Input } from "@chakra-ui/react";
import { ItemListContainer, Loader } from "../components";
import { useProducts, useSearch, useTitle } from "../hooks";

export const Home = () => {
  const { products, loading } = useProducts();
  const { handleClickSearch, setSearch, productsSearch } = useSearch();
  useTitle({title: "Home"});

  return (
    <>
      <Flex w="50%">
        <Input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar un producto"
        />
        <Button onClick={handleClickSearch}>Buscar</Button>
      </Flex>

      {loading ? (
        <Loader />
      ) : (
        <ItemListContainer
          products={productsSearch.length > 0 ? productsSearch : products}
        />
      )}
    </>
  );
};