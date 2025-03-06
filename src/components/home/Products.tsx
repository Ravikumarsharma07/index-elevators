import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const products = [
  {
    id: 1,
    price: "$1000",
    name: "Electrical wire hoist",
    description: "A motorized hoist using wire rope for heavy lifting.",
  },
  {
    id: 2,
    price: "$1000",

    name: "Monkey hoist",
    description: "A compact hoist for lifting materials on construction sites.",
  },
  {
    id: 3,
    price: "$1000",

    name: "Winch machine",
    description: "A device for pulling or lifting using a rotating drum.",
  },
  {
    id: 4,
    price: "$1000",

    name: "Goods lift",
    description: "An elevator for transporting heavy goods between floors.",
  },
];

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
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="group overflow-hidden flex flex-col justify-center border rounded-lg w-[300px] md:w-[350px] shadow-md shadow-secondary border-border bg-/95 gap-2"
            >
              <div className="h-[300px] md:h-[350px] w-full overflow-hidden ">
                <Image
                  height={100}
                  width={150}
                  className="w-full rounded-t group-hover:scale-110 object-cover transition-all duration-200"
                  src="/hoist.png"
                  alt="machine"
                />
              </div>
              <div className="px-3 pb-4 text-secondary">
                <div className="flex-between pb-3">
                  <h3 className="text-xl font-sans font-semibold">
                    {product.name}
                  </h3>
                  <p className="text-lg font-semibold text-primary">{product.price}</p>
                </div>
                <p className="text-secondary/80 text-[16px] font-serif pb-1">{product.description}</p>
                <div className="flex-between w-max text-accent">
                <Link href={`/products/${product.id}`} className="group-hover:underline font-semibold text-accent">more details</Link>
                <ChevronRight size={22} className="group-hover:translate-x-2 transition-all"/>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Products;
