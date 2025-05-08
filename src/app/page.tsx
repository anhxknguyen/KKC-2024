"use client";

import React from "react";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/home");
  };

  return (
    <div className="h-screen w-screen bg-black flex justify-between overflow-hidden items-center ">
      <div className="flex flex-col items-start gap-10 text-rose-50 ">
        <p className="">You are a terrible person.</p>
        <button onClick={handleClick} className="hover:cursor-pointer">
          view 2024
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
