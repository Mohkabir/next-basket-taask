"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroSection from "./components/hero-section";
import SectionTitles from "../../components/section-titles";
import ProductContainers from "../../components/product-containers";
import BestService from "./components/best-service";
import FeaturedPosts from "./components/featured-posts";
import ProblemWeSolve from "./components/problem-we-solve";
import { fetchProducts } from "../../services/api";
import { RootState } from "@/global-state/store";
import { addMoreProducts, setProducts } from "@/global-state/products-slice";

const Landing: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const productsData = await fetchProducts(page);
        if (page > 0) {
          dispatch(addMoreProducts(productsData));
        } else {
          dispatch(setProducts(productsData));
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log("error", error);
      }
    };

    fetchData();
  }, [dispatch, page]);

  const handleMore = () => {
    setPage(page + 1);
  };

  const hasMoreData = products.total === products.data.length ? false : true;
  return (
    <div>
      <HeroSection />
      <SectionTitles
        titleOne="Featured Products"
        titleTwo="BESTSELLER PRODUCTS"
        titleThree="Problems trying to resolve the conflict between "
      />
      <ProductContainers
        products={products.data}
        loadMore={hasMoreData}
        loading={loading}
        handleMore={handleMore}
      />
      <BestService />
      <FeaturedPosts />
      <ProblemWeSolve />
    </div>
  );
};

export default Landing;
