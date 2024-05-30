"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Introduction = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const textDisplay = [
    "hi. is pap. i will be your guide thru out this experience.",
    "we will go thru a series of very important questions...",
    "they will determin the course of your journey.",
    "let's begin! (click to continue)",
  ];
  const message = textDisplay[index];

  function handleClick() {
    if (index < textDisplay.length - 1) {
      setIndex(index + 1);
    } else {
      router.push("/questions/1");
    }
  }

  return (
    <div className="flex h-full justify-center items-center text-rose-50">
      <div
        className="bg-rose-400 h-fit px-6 pt-6 pb-3 rounded text-xl flex flex-col gap-2 items-end hover:bg-rose-500 hover:cursor-pointer"
        onClick={handleClick}
      >
        <div>{message}</div>
        <div className="right-6"> &rarr;</div>
      </div>
    </div>
  );
};

export default Introduction;
