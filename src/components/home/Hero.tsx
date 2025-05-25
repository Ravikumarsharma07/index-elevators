"use client";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const images = [
  {
    id: 1,
    url: "/workshop-ai.webp",
  },
  {
    id: 2,
    url: "/workshop-ai-1.jpg",
  },
  // {
  //   id: 3,
  //   url: "/workshop-ai-2.jpg",
  // },
  {
    id:3,
    url:"/workshop-ai-3.jpg"
  }
];
const HeroSectionHome = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState("/workshop-ai-1.jpg");

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(imageIndex);

      if (imageIndex == 2) {
        setImageIndex((prevIndex) => prevIndex - 2);
        setCurrentImage(`${images[imageIndex].url}`);
      } else {
        setImageIndex((prevIndex) => prevIndex + 1);
        setCurrentImage(`${images[imageIndex].url}`);
      }
    }, 4000);

    return () => clearInterval(interval);
  });


  return (
    <section
      id="home"
      className={`relative overflow-hidden min-h-[100dvh] h-max pt-24 mt-0 pb-10 padding-x lg:px-24 w-full flex-between  gap-10`}
    >
      <Image
        unoptimized
        quality={100}
        src={currentImage}
        key={imageIndex}
        alt="company's workshop"
        height={100}
        width={100}
        className={`absolute animate-opacity bg-contain z-10 top-0 left-0 h-full w-full`}
      />
      <div className="absolute z-10 top-0 left-0 h-full w-full bg-black/40"></div>
      <div className="w-full md:p-4 z-20 inset-0 mt-24 md:w-3/5 flex flex-col max-md:text-center gap-2 max-md:mt-6">
        <h1 className="text-background text-[28px] leading-[44px]  lg:text-[40px] lg:leading-[60px] font-sans font-semibold px-[00px] ">
          Elevating Industry Standards With Premium Lifting Solutions.
        </h1>
        <p className="text-background/90 z-0 text-[20px] font-serif font-light">
          Trusted provider of individual winches, hoists, and lifting
          equipments.
        </p>
        <Link
          href={"#products"}
          className="group w-max max-md:place-self-center bg-primary rounded-md px-6 py-3 text-lg flex-center text-secondary font-serif mt-6 hover:opacity-90"
        >
          Explore Products{" "}
          <ChevronRightIcon
            size={20}
            className="group-hover:translate-x-3 transition-all"
          />
        </Link>
      </div>
      {/* <div className="w-full md:w-2/5 h-max flex justify-center max-md:pt-10 md:justify-end">
        <Image
        height={100}
        width={100}
        quality={100}
        unoptimized
          src="/index-logo.png"
          alt="company logo"
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full object-fill"
        />
      </div> */}
    </section>
  );
};

export default HeroSectionHome;
