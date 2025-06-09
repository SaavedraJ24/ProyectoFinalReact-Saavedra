import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory, getProductById } from "../services"

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts().then((res) => {
            setProducts(res.data.products);
        }).catch((error) => {
            console.error(error)
        }).finally(() => setLoading(false));
    }, []);

    return { products, loading };

}

export const useProductsByCategory = (id) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductsByCategory(id).then((res) => {
            setProducts(res.data.products);
        }).catch((error) => {
            console.error(error)
        }).finally(() => setLoading(false));
    }, [id]);

    return { products, loading };

}

export const useProductById = (id) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductById(id).then((res) => {
            setProducts(res.data.products);
        }).catch((error) => {
            console.error(error)
        }).finally(() => setLoading(false));
    }, []);

    return { products, loading };

}