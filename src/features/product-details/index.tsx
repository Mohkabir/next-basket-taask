"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import HeroSection from "./components/hero-section-product-details";
import ProductContainers from "@/components/product-containers";
import ProductInfo from "./components/product-info";
import Brands from "./components/brands";
import Socials from "@/components/socials";
import { RootState } from "@/global-state/store";
import { fetchProductDetails, fetchProducts } from "@/services/api";
import { setProductDetails, setProducts } from "@/global-state/products-slice";

const ProductPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProduct = async () => {
      const { productId } = params;

      if (productId) {
        try {
          const data = await fetchProductDetails(productId as string);
          dispatch(setProductDetails({ product: data }));
          setLoading(false);
        } catch (error) {
          console.error("Error fetching product:", error);
          setLoading(false);
        }
      }
      const productsData = await fetchProducts(0);
      dispatch(setProducts(productsData));
    };

    fetchProduct();
  }, [params, dispatch]);

  return (
    <div>
      <HeroSection productDetails={products?.currentProduct} loading={loading} />
      <ProductInfo />
      <div style={{ backgroundColor: "#FAFAFA" }}>
        <div>
          <div className="wrapper">
            <h2 style={{ padding: "2.5rem 0" }}>BESTSELLER PRODUCTS</h2>
          </div>
          <ProductContainers products={products.data} loadMore={false} />
        </div>
        <Brands />
        <Socials bg="#ffffff" />
      </div>
    </div>
  );
};

export default ProductPage;
