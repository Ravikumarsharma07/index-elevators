"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Category } from "@/lib/types";
import Link from "next/link";

function ProductCard({ category }: { category: Category }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
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

      {/* {category.form ? (
        <category.form isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
      ) : ( */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-6xl w-[90%] max-h[90%] p-0 m-0 border-none bg-white font-sans rounded-xl">
          <DialogHeader className="p-4 px-6">
            <DialogTitle className="text-xl sm:text-2xl text-start font-bold text-secondary">
              {category.name}
            </DialogTitle>
          </DialogHeader>
          <div className="overflow-y-auto flex-1 px-5 pb-3">
            <div className="space-y-8">
              {category.products.map((product, index) => (
                <div
                  key={index}
                  className="bg-background hover:bg-primary/10 rounded-2xl p-6 group flex max-md:flex-col gap-6"
                >
                  <Image
                    height={100}
                    width={250}
                    className="h-[200px] max-md:w-full rounded-xl group-hover:scale-[1.05] object-cover transition-all ease-in duration-200"
                    src="/img-placeholder.png"
                    alt={product.name}
                  />
                  <div className="flex-1 space-y-4 ">
                    <div className="flex-between">
                      <div>
                        <h3 className="text-xl font-bold font-serif text-gray-900">
                          {" "}
                          {product.name}
                        </h3>
                        <p className="text-primary font-semibold mt-1">
                          {product.liftingCapacity}
                        </p>
                      </div>
                      {category.form && (
                        <category.form
                          isDialogOpen={isFormOpen}
                          setIsDialogOpen={setIsFormOpen}
                        />
                      )}
                      {category.form ? (
                        <button
                          onClick={() => setIsFormOpen(true)}
                          className="bg-orange-500 group hover:bg-orange-600 flex-between text-white text-nowrap md:font-semibold py-2 px-1 md:px-3 max-md:text-[14px] rounded-xl"
                        >
                          Get Price{" "}
                          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                        </button>
                      ) : (
                        <Link
                          target="_blank"
                          href={`https://api.whatsapp.com/send/?phone=%2B917827881632&text=Hi+I+am+interested+in+ordering+${product.name}+from+Index+Elevators,+please+send+me+the+latest+price.&type=phone_number&app_absent=0`}
                        >
                          <button className="bg-orange-500 group hover:bg-orange-600 flex-between text-white text-nowrap md:font-semibold py-2 px-1 md:px-3 max-md:text-[14px] rounded-xl">
                            Get Price{" "}
                            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                          </button>
                        </Link>
                      )}
                    </div>

                    <p className="text-gray-600">{product.description}</p>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Specifications:
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {product.specifications.map((spec, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-gray-600">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <DialogHeader>
           <DialogTitle className="text-2xl font-bold text-secondary">{category.name}</DialogTitle>
         </DialogHeader>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="relative h-80 w-full rounded-lg overflow-hidden">
                    <Image
                      src="/hoist.png"
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                    <ul className="space-y-2">
                      {category.products.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <ChevronRight size={16} className="text-blue-600" />
                          <span>{feature.specifications}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Price</h3>
                    <p className="text-xl font-bold text-blue-600">{category.description}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Range of machines</h3>
                    {category.products.map((machine, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <ChevronRight size={16} className="text-blue-600" />
                        <span>{machine.liftingCapacity}</span>
                      </div>
                    ))}
                  </div>
                </div> */}
        </DialogContent>
      </Dialog>
      {/* )} */}
    </>
  );
}

export default ProductCard;
