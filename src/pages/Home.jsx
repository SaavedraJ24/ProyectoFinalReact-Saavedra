import { Button, Flex, Input } from "@chakra-ui/react";
import { ItemListContainer, Loader } from "../components";
import { useProducts, useSearch } from "../hooks";
// import { useContext } from "react";
// import { CartContext } from "../context";

export const Home = () => {
  const { products, loading } = useProducts();
  const { handleClickSearch, setSearch, productsSearch } = useSearch();

  const handleInputChange = (e) => {
    console.log(e.target.value);
  };

  const handleInputClick = () => {
    console.log("Input clickeado");
  };

  return (
    <>
      <Flex w="50%">
        <Input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar un producto"
        />
        <Input
          id="myInput"
          w={"50%"}
          onChange={(e) => {
            handleInputChange(e);
          }}
          onClick={handleInputClick}
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