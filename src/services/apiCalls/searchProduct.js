import axios from "axios";
import { BASE_URL } from "../config/api";


export async function searchProduct(txtSearch) {
    return await axios.get(`${BASE_URL}/products/search?q=${txtSearch}`);
}