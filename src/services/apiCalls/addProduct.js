import axios from "axios";
import { BASE_CONFIG, BASE_URL } from "../config/api";

export async function addProduct(data) {
    return await axios.post(`${BASE_URL}/products/add`,
        JSON.stringify(data),
        BASE_CONFIG,
    );
}