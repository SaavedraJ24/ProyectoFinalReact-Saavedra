import { Flex } from "@chakra-ui/react";
import { FaCartShopping } from "react-icons/fa6";

export const CartWidget = () => {
  return (
    <Flex
      alignItems={"center"}
      fontSize={24}
      marginRight={"1.2rem"}
      justifyContent={"space-between"}
      width={"50px"}
    >
      <FaCartShopping />
      <div>0</div>
    </Flex>
  );
};