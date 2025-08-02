"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Category } from "@/lib/types";
import ProductsCarousel from "./ProductsCarousel";

function ProductCard({ category }: { category: Category }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
      <div
        key={category.id}
        onClick={() => setIsDialogOpen(true)}
        className="relative cursor-pointer group overflow-hidden flex flex-col justify-center border rounded-2xl w-[300px] md:w-[360px] shadow-md shadow-secondary/30 border-border bg-/95 gap-2"
      >
        <div className=" absolute top-0 left-0 h-[220px] md:h-[260px] w-full bg-black opacity-0 group-hover:opacity-25 transition-all duration-200 ease-in"></div>
        <div className="h-[220px] md:h-[260px] w-full group-hover:opacity-70 overflow-hidden ">
          <Image
            height={100}
            width={150}
            className="w-full h-full rounded-t group-hover:scale-[1.05] object-cover transition-all duration-200"
            src={category.imageUrl}
            alt={category.name}
          />
        </div>
        <div className="px-3 pb-4 text-secondary ">
          <div className="flex-between md:h-[45px]">
            <h3 className="text-[19px] font-sans font-semibold">
              {category.name}
            </h3>
            {/* <p className="text-[16px] text-nowrap text-primary font-bold">Get Price</p> */}
          </div>
          <p className="text-secondary/70 text-[16px] font-serif pb-1">
            {category.description}
          </p>
          <div className="flex-between w-max text-accent">
            <p className="group-hover:underline font-semibold text-accent">
              View all products
            </p>
            <ChevronRight
              size={22}
              className="group-hover:translate-x-2 transition-all"
            />
          </div>
        </div>
      </div>

      <ProductsCarousel category={category} isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen}/>

    </>
  );
}

export default ProductCard;
