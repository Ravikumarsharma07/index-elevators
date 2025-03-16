import React from "react";
import ProductCard from "./ProductCard";
import { categories } from "@/constants/products";


const Products = () => {
  return (
    <section
      id="products"
      className="padding-x py-20 flex-center-col gap-2 text-center"
    >
      <h2 className="text-secondary text-3xl font-semibold">Our Products</h2>
      <p className="text-secondary/90">
        Discover over range of professional lifting solutions
      </p>
      
      <section className="flex-center mt-10 gap-16 flex-wrap text-start">
        {categories.map((categorie) => {
          return (
            <ProductCard key={categorie.id} category={categorie} />
          );
        })}
      </section>
      
    </section>
  );
};

export default Products;
