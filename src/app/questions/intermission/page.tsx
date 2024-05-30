"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Intermission = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [showPrevious, setShowPrevious] = useState(false);
  const textDisplay = [
    "OOP!!! is a intermission time!!",
    "ouh.. it seems like even after 3 years,",
    "everything is STILL not daijoubu...",
    "(recall previous years)",
    "but das ok... we will get thru this together eventually..",
    "anyways we have around 3 more questions to go!!",
    "ur doing great!! keep it up yo!! (click to continue)",
  ];
  const message = textDisplay[index];

  function handleClick() {
    if (index < textDisplay.length - 1) {
      setIndex(index + 1);
      if (index === 2) {
        setShowPrevious(true);
      } else {
        setShowPrevious(false);
      }
    } else {
      router.push("/questions/4");
    }
  }

  return (
    <div className="flex flex-col h-full justify-center items-center gap-2">
      {!showPrevious ? (
        <img src={"/intermission.jpeg"} className="h-2/3" />
      ) : (
        <img src={"/intermission2.png"} className="h-2/3" />
      )}
      <div
        className="bg-rose-400 text-rose-50 h-fit px-6 pt-6 pb-3 rounded text-xl flex flex-col gap-2 items-end hover:bg-rose-500 hover:cursor-pointer"
        onClick={handleClick}
      >
        <div>{message}</div>
        <div className="right-6"> &rarr;</div>
      </div>
    </div>
  );
};

export default Intermission;
