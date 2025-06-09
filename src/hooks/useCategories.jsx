import { useEffect, useState } from "react";
import { getCategories } from "../services";

export const useCategories = () => {
    const [categories, setCategories] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getCategories().then((res) => {
            setCategories(res.data);
        }).catch((error) => console.error(error))
        .finally(() => setLoading(false))
    }, []);
    
    return { categories, loading };
}