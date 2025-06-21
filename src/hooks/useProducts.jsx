import React from 'react';
import { useEffect, useState } from "react";
import {
    db,
} from "../services";

import { collection, getDoc, doc, getDocs, query, where } from "firebase/firestore";

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const collectionName = collection(db, "products");
        getDocs(collectionName)
            .then((snapshot) => {
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                setProducts(data);
            })
            .catch((error) => console.error(error))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { products, loading };
};

export const useProductsByCategory = (id) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, "products"), where("category", "==", id));
        getDocs(q)
            .then((snapshot) => {
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(data);
            })
            .then((res) => {
                setProducts(res.data.products);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => setLoading(false));
    }, [id]);

    return { products, loading };
};

export const useProductById = (id) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const productQuery = doc(db, "products", id)
        getDoc(productQuery)
            .then((snapshot) => {
                setProduct({
                    id: snapshot.id,
                    ...snapshot.data()
                });
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);
    return { product, loading };
};