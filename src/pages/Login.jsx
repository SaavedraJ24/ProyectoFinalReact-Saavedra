import { Box, VStack, FormControl, Text, Input, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate, Link } from 'react-router';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {user, login} = useAuth();
    const toast = useToast();
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            navigate("/", { replace: true });
        }
    }, [user, navigate]);
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await login(email, password);
            toast({
                title: "Usuario logeado",
                description: "Se inició sesión correctamente.",
                status: "success",
                duration: 3000,
                isClosable: true,
            })
        } catch (error) {
            toast({
                title: "Error",
                description: "Se inició sesión correctamente.",
                status: "success",
                duration: 3000,
                isClosable: true,
            })
        }

    }

    return (
        <Box maxW={md} mx="auto" mt={8} p={6} borderWidth={1} borderRadius="lg">
            <form onSubmit={handleSubmit}>
                <VStack spacing={6}>
                    <Text>Iniciar sesión</Text>
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
                    <FormControl>
                        <Text>Password:</Text>
                        <Input
                            type='password'
                            value={password}
                            placeholder='Por favor, ingrese su contraseña'
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </FormControl>
                    <Button type="submit">Iniciar sesión</Button>
                </VStack>
            </form>
            <Text mt={'18px'}>No estás registrado? <Link to={'/signup'}>Hazlo aquí</Link></Text>
        </Box>
    )
}