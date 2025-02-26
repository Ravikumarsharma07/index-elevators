import Image from "next/image";
import React from "react";

const OurMission = () => {
  return (
    <section className="bg-[#0057B8]/80 grid grid-cols-1 md:grid-cols-2 max-md:pt-16">
      <div className="flex flex-col justify-center gap-4 lg:gap-6 max-md:pb-8 max-md:px-3 md:pl-6 lg:pl-10">
        <h3 className="text-[#F8F9FA] font-sans font-semibold text-3xl lg:text-4xl">
          Our Mission
        </h3>
        <p className="text-[#F8F9FA]/80 lg:pr-16 text-[16px] lg:text-[18px] font-sans tracking-wide leading-[28px] lg:leading-[30px]">
          <span className="md:leading-10 font-serif text-[18px] lg:text-[20px] ">
            At Index Elevators, our mission is simple:
          </span>
          <br />
          <span className="bg-[#a1a1a169] rounded-sm">
            1. Deliver Superior Quality </span>
           – We manufacture lifting equipment that ensures strength, safety, and
          longevity. <br />
          <span className="bg-[#a1a1a169] rounded-sm">2. Enhance Operational Efficiency </span>
           – Our solutions are designed to
          increase productivity and reduce downtime. <br />
          <span className="bg-[#a1a1a169] rounded-sm">3. Prioritize Safety </span>– We adhere to IS: 3938 standards, ensuring all
          our machines meet rigorous safety regulations. <br />
          <span className="bg-[#a1a1a169] rounded-sm">4. Empower Industries </span>– From construction and manufacturing to
          warehousing and logistics, we provide equipment that supports seamless
          operations. Our commitment to innovation and customer satisfaction
          drives everything we do.
        </p>
      </div>
      <div className="flex justify-end">
        <Image
          className="w-full md:w-[85%] max-h-[95vh] object-cover"
          src="/workshop2.jpg"
          alt="mission"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default OurMission;
