import { toast } from "react-toastify";

const baseUrl = "https://dummyjson.com";

export const fetchProducts = async (page: number) => {
  const skip = page === 0 ? 0 : page * 10;
  try {
    const response = await fetch(`${baseUrl}/products?limit=10&skip=${skip}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    toast.error("Something went wrong while fetching products");
  }
};

export const fetchProductDetails = async (id: string) => {
  try {
    const response = await fetch(`${baseUrl}/product/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    toast.error("Something went wrong while fetching products");
  }
};

export const searchProductDetails = async (search: string) => {
  try {
    const response = await fetch(`${baseUrl}/products/search?q=${search}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};
