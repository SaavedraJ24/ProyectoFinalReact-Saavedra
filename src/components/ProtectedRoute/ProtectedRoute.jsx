import React from 'react';
import { 
    Box, 
    Heading
} from "@chakra-ui/react"
import { useAuth } from "../../hooks"
import { Navigate } from "react-router-dom"


export const ProtectedRoute = ({ children }) => {
    const { loading, user } = useAuth()
    if (loading) {
        return (
        <Box>
            <Heading as={"h3"} size={"lg"}>Loading protected route...</Heading>
        </Box>
        )
    }
    if(!user){
        return <Navigate to="/login" />;
    }

    return children;
}