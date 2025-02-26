import { Award, Users } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="flex max-md:flex-col justify-center items-center max-sm:flex-col padding-x pb-16 gap-4 md:gap-10 min-h-[80dvh] text-[#1E1E1E] font-sans">
      <div className="md:w-1/2 lg:w-2/3 flex flex-col gap-6 py-10 max-md:text-center max-md:items-center">
        <h2 className="text-2xl md:text-[26px] lg:text-3xl font-bold">Welcome to Index Elevators</h2>
        <p className="text-[#1E1E1E]/70 lg:pr-16 text-[18px] font-serif tracking-wide leading-[30px]">
          Founded by <b>Gurvinder Singh</b>, we take pride in being a leading
          manufacturer and high-quality equipment tailored to meet your specific
          requirements. Our team works closely with clients to understand their
          unique needs, offering customized solutions like EOT Cranes, Overhead
          Cranes, Crane Hook Assemblies, and more.
        </p>
        <div className="flex-start gap-6 mt-3">
          <p className="flex-center gap-1 font-semibold">
            <Award className="text-accent"/>
            Since 2015
          </p>
          <p className="flex-center gap-1 font-semibold">
            <Users className="text-accent"/> Expert Team
          </p>
        </div>
      </div>
      <div className="flex-center w-[80%] sm:w-2/3 md:w-[300px] lg:w-1/3">
        <Image src="/workshop3.jpg" alt="company's workshop" className="rounded-2xl" width={400} height={400} />
      </div>
    </section>
  );
};

export default Hero;
