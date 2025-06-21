import { useParams } from "react-router-dom";
import { ItemDetailContainer, Loader } from "../components";
import { useProductById, useTitle } from "../hooks";

export const Item = () => {
  const { id } = useParams();
  useTitle({ title: id });
  const { product, loading } = useProductById(id);

  return loading ? <Loader /> : <ItemDetailContainer product={product} />;
};