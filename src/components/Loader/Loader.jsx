import React from 'react';
import { Flex, Spinner } from "@chakra-ui/react";

export const Loader = () => {
    return (
        <Flex justifyContent={"center"} alignItems={"center"} height={"90vh"}>
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
            />
        </Flex>
    );
};