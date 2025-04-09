"use client"
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const BackBtn = () => {
  const router = useRouter();

  return (
    <div onClick={()=>router.back()}>
      <button className="bg-[#0057B8] fixed px-2 py-2 top-3 left-2 md:top-4 md:left-8 rounded-full border border-[#FFC107] flex-center gap-1 md:gap-2 text-lg text-[#FFC107]">
        <ArrowLeft size={20} strokeWidth={3} />
      </button>
    </div>
  );
};

export default BackBtn;
