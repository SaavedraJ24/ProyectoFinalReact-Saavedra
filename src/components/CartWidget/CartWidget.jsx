import React from 'react';
import { Flex } from "@chakra-ui/react";
import { FaCartShopping } from "react-icons/fa6";
import { useProductsStore } from "../../store";
import { useNavigate } from "react-router-dom";

export const CartWidget = () => {
  const totalItems = useProductsStore((state) => state.getTotalItems());
  const navigate = useNavigate();
  return (
    <Flex
      alignItems={"center"}
      fontSize={24}
      marginRight={"1.2rem"}
      justifyContent={"space-between"}
      width={"50px"}
      onClick={() => navigate('/cart')}
    >
      <FaCartShopping />
      <div>{totalItems}</div>
    </Flex>
  );
};