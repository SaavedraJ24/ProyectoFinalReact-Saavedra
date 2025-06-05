import { Box } from "@chakra-ui/react";
import { NavBar } from "../components";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Box w={"100vw"}>
        <Outlet />
      </Box>
    </>
  );
};