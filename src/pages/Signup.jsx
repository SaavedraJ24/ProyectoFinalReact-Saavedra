import React, { useEffect, useState } from "react"
import { useAuth, useTitle } from "../hooks";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    VStack,
    useToast,
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";


export const Signup = () => {
    useTitle({ title: "Signup" });
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const toast = useToast();
    const navigate = useNavigate();
    const { signup, user } = useAuth();

    useEffect(() => {
        if (user) {
            navigate("/", { replace: true });
        }
    }, [user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            return toast({
                title: 'Error',
                description: 'Passwords do NOT match',
                status: 'error',
                duration: 4000,
                isClosable: true,
            });
        }

        try {
            await signup(email, password);
            toast({
                title: "User created!",
                description: "User successfully created.",
                status: "success",
                duration: 4000,
                isClosable: true,
            })
        } catch (error) {
            toast({
                title: "Error",
                description: "Signup unsuccessful.",
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
                    <Heading as={"h2"} size="xl" fontWeight={"600"}>Signup</Heading>
                    <FormControl isRequired>
                        <FormLabel>Email:</FormLabel>
                        <Input type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            placeholder="example@gmail.com"
                            pattern=".+@gmail\.com"
                            title="Please provide only a gmail address" />
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
                    <FormControl isRequired>
                        <FormLabel>Confirm password:</FormLabel>
                        <Input type="password"
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                            }}
                            placeholder="************"
                        />
                    </FormControl>
                    <Button type="submit" colorScheme="teal">Submit</Button>
                </VStack>
            </form>
        </Box>
    )
}