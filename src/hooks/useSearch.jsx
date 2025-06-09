import { useState } from "react";
import { searchProduct } from "../services";

export const useSearch = () => {
    const [ productsSearch, setProducts ] = useState([]);
    const [ search, setSearch ] = useState("");

    const handleClickSearch = () => {
        searchProduct(search).then((res) => {
            setProducts(res.data.products)
        }).catch((error) => console.error(error));
    }

    return { handleClickSearch, setSearch, productsSearch };
}