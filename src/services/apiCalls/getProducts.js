import axios from "axios"
import { BASE_URL } from "../config/api"

export async function getProducts() {
    return await axios.get(`${BASE_URL}/products`);
}