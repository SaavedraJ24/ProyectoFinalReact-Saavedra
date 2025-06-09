import { Flex } from "@chakra-ui/react";
import { FaCartShopping } from "react-icons/fa6";
import { useProductStore } from "../../store/useProductStore";

export const CartWidget = () => {
  const totalItems = useProductStore((state) => state.getTotalItems());
  
  return (
    <Flex
      alignItems={"center"}
      fontSize={24}
      marginRight={"1.2rem"}
      justifyContent={"space-between"}
      width={"50px"}
    >
      <FaCartShopping />
      <div>{totalItems}</div>
    </Flex>
  );
};