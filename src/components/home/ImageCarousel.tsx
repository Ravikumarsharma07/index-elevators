import { Product } from "@/lib/types";
import React, { useState } from "react";
import Image from "next/image";

const ImageCarousel = ({ product }: { product: Product }) => {
  const [image, setImage] = useState(product.imageUrl);
  return (
    <div className="relative space-y-4">
      <Image
        height={100}
        width={270}
        className="h-[270px] xl:h-[350px] w-[350px] xl:w-[450px] max-md:w-full rounded-xl border border-gray-200 object-cover"
        src={image}
        alt={product.name}
      />
      <div className="flex gap-3 flex-wrap">
        {product.images?.map((img, index) => (
          <Image
            src={img}
            onClick={() => setImage(img)}
            alt={product.name}
            className={`w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] object-cover ${
              image == img && "border-orange-400 border-2"
            } cursor-pointer hover:scale-105 transition-all duration-150 rounded-lg`}
            height={100}
            width={100}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
