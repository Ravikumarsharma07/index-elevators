import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="padding-x bg-background py-20 flex-center-col gap-12 md:gap-16"
    >
      <h2 className="text-secondary text-3xl font-semibold">About Us</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10">
        <div className="max-md:text-center">
          <h3 className="text-accent text-2xl font-semibold my-4">
            Index Elevators
          </h3>
          <p className="font-sans text-secondary/80 text-[18px] md:text-[20px] leading-[30px]">
            Welcome to <b>Index Elevators</b>, your trusted partner in lifting
            and hoisting solutions since 2015.
          </p>
          <p className="font-sans text-secondary/80 text-[18px] mt-2 md:text-[20px] leading-[27px]">

            We prioritize customized solutions, working closely with clients to
            meet their specific needs. Our commitment to quality, affordability,
            and reliability ensures that our products enhance your operations
            and stand the test of time. Let Index Elevators help you elevate
            your business to new heights with industry-leading lifting
            solutions.
          </p>
          <Link href="/about">
            <p className="text-blue-500 text-[18px] mt-4 underline">
              Learn more.
            </p>
          </Link>
        </div>

        <div className="flex-center">
          <Image
            height={300}
            width={400}
            className="rounded-xl w-[300px] md:w-[300px] lg:w-[400px] opacity-90"
            src="/about.jpg"
            alt="hoist"
          />
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
