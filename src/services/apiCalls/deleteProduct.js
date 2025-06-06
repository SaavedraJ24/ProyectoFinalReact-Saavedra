import axios from "axios";
import { BASE_URL } from "../config/api";

export async function deleteProduct(id) {
    return await axios.delete(`${BASE_URL}/products/${id}`);
}