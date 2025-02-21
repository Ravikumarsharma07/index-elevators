import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="padding-x bg-background py-20 flex-center-col gap-12 md:gap-16">
      <h2 className="text-secondary text-3xl font-semibold">About Us</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10">
        <div className="max-md:text-center">
          <h3 className="text-accent text-2xl font-semibold my-4 lg:mt-10">Index Elevators</h3>
          <p className="font-sans text-secondary/80 text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit possimus neque similique. Sunt porro vero suscipit
            beatae inventore, ullam quae iste rerum accusantium voluptatum
            asperiores quo animi quos amet cupiditate  quo animi quos amet cupiditate.
          </p>
        </div>

        <div>
            <Image height={300} width={400} className="rounded-xl w-[300px] md:w-[300px] lg:w-[400px]" src="/index-logo.png" alt="hoist" />
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
