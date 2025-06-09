import { ItemListContainer, Loader } from "../components";
import { useProductsByCategory } from "../hooks";
import { useParams } from "react-router-dom";

export const Category = () => {
  const { id } = useParams();

  const { products, loading } = useProductsByCategory(id);

  return loading ? <Loader /> : <ItemListContainer products={products} />;
};