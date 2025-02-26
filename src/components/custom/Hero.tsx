import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSectionHome = () => {
  return (
    <section
      id="home"
      className="min-h-[100dvh] h-max pt-24 pb-10 padding-x lg:px-24 w-full flex-between max-md:flex-col gap-10"
    >
      <div className="w-full md:w-3/5 flex flex-col max-md:text-center gap-2 max-md:mt-6">
        <h1 className="text-secondary text-[30px] leading-[44px]  lg:text-[40px] lg:leading-[60px] font-sans font-semibold px-[00px] ">
          Elevating Industry Standards With Premium Lifting Solutions.
        </h1>
        <p className="text-secondary/80 z-0 text-[20px] font-serif font-light">
          Trusted provider of individual winches, hoists, and lifting
          equipments.
        </p>
        <Link href={"#products"} className="group w-max max-md:place-self-center bg-primary rounded-md px-6 py-3 text-lg flex-center text-secondary font-serif mt-6 hover:opacity-90">Explore Products <ChevronRightIcon size={20} className="group-hover:translate-x-3 transition-all"/></Link>
      </div>
      <div className="w-full md:w-2/5 h-max flex justify-center max-md:pt-10 md:justify-end">
        <Image
        height={100}
        width={100}
        quality={100}
        unoptimized
          src="/index-logo.png"
          alt="company logo"
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full object-fill"
        />
      </div>
    </section>
  );
};

export default HeroSectionHome;
