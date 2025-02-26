import machines from "@/constants/OurMachines";
import { Weight } from "lucide-react";
import React from "react";

const OurMachines = () => {
  return (
    <section className="padding-x py-20 text-center">
        <div className="bg-white rounded-lg p-4 sm:p-8 shadow-lg mb-8">
          <h2 className="text-secondary text-2xl md:text-3xl font-semibold">
            Our Machines
          </h2>
          <p className="text-[#1E1E1E]/60 lg:pr-16 text-[18px] font-serif tracking-wide leading-[30px] my-5">
            Heavy-duty fabricated Structure for hoisting & trolley, ms Gear Box
            Housings with High Precision-cut Oil Cooled Helical internal gears &
            Pinion makes this machine the most demanding Machine in the
            industry. All Standard models of Electric wire rope hoists are
            designed with M5 & M6 rated Gearboxes to improve machine
            performance. We also offer specially build M8 duty wire rope hoist
            for continuous usage.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-lg py-4 px-2 sm:p-4">
            <div className="flex items-center gap-1 sm:gap-2 text-blue-700 font-sans">
              <Weight className="w-5 h-5" />
              <span className="font-semibold">Safe Working Load:</span>
              <span>0.5 ton to 50.0 ton</span>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
          {machines.map((machine)=>{
            return (
              <div key={machine.title} className="bg-white flex flex-col gap-2 shadow-xl hover:scale-[1.05] transition-all duration-200 shadow-blue-100 justify-start text-start p-4 rounded-xl">
                <div className="text-[#0057B8]">{machine.icon}</div>
                <h3 className="text-2xl font-mono text-[#1E1E1E]/90 font-semibold">{machine.title}</h3>
                <p className="text-[16px] leading-[24px] font-sans text-[#1E1E1E]/70">{machine.description}</p>
              </div>
            )
          })}
        </div>
    </section>
  );
};

export default OurMachines;
