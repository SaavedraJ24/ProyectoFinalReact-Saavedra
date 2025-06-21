import React from "react";
import { ItemListContainer, Loader } from "../components";
import { useProductsByCategory, useTitle } from "../hooks";
import { useParams } from "react-router-dom";

export const Category = () => {
  const { id } = useParams();
  useTitle({title: id});

  const { products, loading } = useProductsByCategory(id);

  return loading ? <Loader /> : <ItemListContainer products={products} />;
};