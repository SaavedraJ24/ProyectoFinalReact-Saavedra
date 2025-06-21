import React, { useEffect, useState } from "react"
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Text,
    VStack,
    useToast,
} from "@chakra-ui/react"
import { useAuth, useTitle } from "../hooks";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
    useTitle({title: "Login"});
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const { user, login } = useAuth();
    const toast = useToast();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            console.log(user);
            navigate('/', { replace: true })
        }
    }, [user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            toast({
                title: "Successful login",
                description: "Logged in successfully.",
                status: "success",
                duration: 4000,
                isClosable: true,
            })
        } catch (error) {
            toast({
                title: "Unsuccessful login",
                description: "Email or password are incorrect.",
                status: "error",
                duration: 4000,
                isClosable: true,
            })
        }

    }

    return (
        <Box maxW="md" mx="auto" mt={8} p={7} borderWidth={1} borderRadius="lg">
            <form onSubmit={handleSubmit}>
                <VStack spacing={"10px"}>
                    <Heading as={"h2"} size="xl" fontWeight={"600"}>Login</Heading>
                    <FormControl isRequired>
                        <FormLabel>Email:</FormLabel>
                        <Input type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            placeholder="example@gmail.com"
                            pattern=".+@gmail\.com"
                            title="Please provide only a gmail address"
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Password:</FormLabel>
                        <Input type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            placeholder="************"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must contain at least 8 characters, including 1 uppercase, 1 lowercase, and 1 number" />
                    </FormControl>
                    <Button type="submit" colorScheme="teal">Enter</Button>
                </VStack>
            </form>
            <Flex mt={'0.2rem'} justifyContent={'flex-start'} gap={'0.4rem'}>
                <Text>Do you not have an account?</Text>
                <Link to={'/signup'}>Signup here!</Link>
            </Flex>
        </Box>
    )
}