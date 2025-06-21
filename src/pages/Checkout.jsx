import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { db } from "../services";
import { addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2";
import { useProductsStore } from "../store";
import { useTitle } from "../hooks";

export const Checkout = () => {
  useTitle({title: "Checkout"});
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  const cartState = useProductsStore((state) => state.cart);
  const total = useProductsStore((state) => state.getTotalPrice());

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      buyer: form,
      items: cartState.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      })),
      total,
    };
    console.log(data);

    const collectionName = collection(db, "orders");

    addDoc(collectionName, data)
      .then(({ id }) => {
        Swal.fire({
          title: "Successful purchase!",
          text: `For claims processing, please include purchase number: ${id}.`,
          icon: "success",
          draggable: true,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/");
          }
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={7} borderWidth={1} borderRadius="lg">
      <form onSubmit={handleSubmit}>
        <VStack spacing="10px">
          <Heading as="h2">Checkout</Heading>

          <FormControl isRequired>
            <FormLabel>Full name:</FormLabel>
            <Input
              type="text"
              placeholder="Example: John Doe"
              pattern="[A-Za-záéíóúÁÉÍÓÚñÑ\s]+"
              title="Only letters and spaces."
              onChange={(e) =>
                setForm({ ...form, fullName: e.target.value })
              }
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Phone:</FormLabel>
            <Input
              type="tel"
              pattern="[\+]?\d{7,15}"
              title="Example formats: 912345678 (local) or +34912345678 (international)"
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email:</FormLabel>
            <Input
              type="email"
              placeholder="example@gmail.com"
              pattern=".+@gmail\.com"
              title="Please provide only a gmail address"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </FormControl>
        </VStack>
        <Button mt={4} type="submit" colorScheme="teal">
          Purchase
        </Button>
      </form>
    </Box>
  );
};