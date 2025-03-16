import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const BackBtn = () => {
  return (
    <Link href="https://index-elevators.vercel.app/#about">
      <button className="bg-[#0057B8] fixed px-2 py-2 top-3 left-2 md:top-4 md:left-8 rounded-full border border-[#FFC107] flex-center gap-1 md:gap-2 text-lg text-[#FFC107]">
        <ArrowLeft size={20} strokeWidth={3} />
      </button>
    </Link>
  );
};

export default BackBtn;
