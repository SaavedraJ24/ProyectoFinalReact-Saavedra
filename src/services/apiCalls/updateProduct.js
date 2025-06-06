import axios from "axios";
import { BASE_CONFIG, BASE_URL } from "../config/api";

export async function updateProduct(id, data) {
    return await axios.put(`${BASE_URL}/products/${id}`,
        JSON.stringify(data), 
        BASE_CONFIG,
    );
}