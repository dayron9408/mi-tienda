import { useQuery } from "@tanstack/react-query";
import type { Product } from "../types/product";

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Error al cargar productos");
  return res.json();
};

export const useProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });
