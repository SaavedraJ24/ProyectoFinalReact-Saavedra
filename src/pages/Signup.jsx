import React, { useState, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth';
import {
    Box,
    VStack,
    FormControl,
    Text,
    Input,
    useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';

export const Signup = () => {
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
                title: "Error",
                description: "Las contraseñas no coinciden",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }

        try {
            await signup(email, password);
            toast({
                title: "Usuario registrado",
                description: "Se ha registrado el usuario",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        } catch (error) {
            toast({
                title: "Error",
                description: "No se ha podido registrar el usuario",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    }
}


return (
    <Box maxW={md} mx="auto" mt={8} p={6} borderWidth={1} borderRadius="lg">
        <form onSubmit={handleSignUp}>
            <VStack spacing={6}>
                <Text>Registrarse</Text>
                <FormControl isRequired>
                    <Text>Email:</Text>
                    <Input
                        type='email'
                        value={email}
                        placeholder='example@gmail.com'
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </FormControl>
                <FormControl isRequired>
                    <Text>Password:</Text>
                    <Input
                        type='password'
                        value={password}
                        placeholder='************'
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <Input
                        type='submit'
                    />
                </FormControl>
                <FormControl isRequired>
                    <Text>Confirm password:</Text>
                    <Input
                        type='password'
                        value={confirmPassword}
                        placeholder='************'
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                        }}
                    />
                </FormControl>
                <Button type="submit">Registrarse</Button>
            </VStack>
        </form>
    </Box>
);