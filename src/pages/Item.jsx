import { ItemDetailContainer, Loader } from "../components";
import { useProductById } from "../hooks";
import { useParams } from "react-router-dom";

export const Item = () => {
  const { id } = useParams();
  const { product, loading } = useProductById(id);

  return loading ? <Loader /> : <ItemDetailContainer product={product} />;
};