import { useEffect, useState } from "react";
import { useAuth } from "../hooks";
import {
  Box,
  FormControl,
  Input,
  VStack,
  Text,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";

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
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={6} borderWidth={1} borderRadius="lg">
      <form onSubmit={handleSubmit}>
        <VStack spacing={6}>
          <Text fontSize={"2xl"} mb={"5px"} fontWeight={"800"}>
            Registrarse
          </Text>
          <FormControl isRequired>
            <Text mb={"5px"}>Correo electronico</Text>
            <Input
              type={"email"}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="example@gmail.com"
            />
          </FormControl>

          <FormControl isRequired>
            <Text mb={"5px"}>Contraseña</Text>
            <Input
              type={"password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="*******"
            />
          </FormControl>

          <FormControl isRequired>
            <Text mb={"5px"}>Confirmar Contraseña</Text>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormControl>

          <Button type="submit" colorScheme="blue">
            Registrarse
          </Button>
        </VStack>
      </form>
    </Box>
  );
};