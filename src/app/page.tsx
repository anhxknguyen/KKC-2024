"use client";

import React from "react";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/introduction");
  };

  return (
    <div className="h-full flex justify-between mx-48 items-center ">
      <div className="flex flex-col items-start gap-10 text-rose-50 ">
        <div className="text-6xl font-bold">
          Tiffy&#39;s Kool Kats Collection: <br />
          <div className="text-rose-400"> An Experience.</div>
        </div>
        <button
          onClick={handleClick}
          className="text-3xl py-2 px-6 bg-rose-400 text-rose-50 rounded hover:bg-rose-500 hover:cursor-pointer"
        >
          Let&#39;s Begin
        </button>
      </div>
      <img className="h-1/2" src="./experience.png" />
    </div>
  );
};

export default LandingPage;
