import axios from "axios"
import { BASE_URL } from "../config/api"

export async function getProducts() {
    return await axios.get(`${BASE_URL}/products`);
}

export async function getProductById(id) {
    return await axios.get(`${BASE_URL}/products/${id}`);
}

export async function getProductsByCategory() {
    return await axios.get(`${BASE_URL}/products/category/${id}`);
}