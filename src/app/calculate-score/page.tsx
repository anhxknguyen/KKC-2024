"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Score = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState("");
  const textDisplay = [
    "hi. is pap again. i shall now calculate ur total score...",
    `to be honest... i havent been keeping track of ur quiz score...`,
    "but i do know where u place on the kit scale!!!", //>0
    "let's see here...",
    "it seems like you fall within this range..from 0 to 1..", //>2
    "this makes u fall under the 'DAMB' kit category ouh...", //>3
    "but das ok..this makes u a very special kit indeed...",
    "is cause damb kits are very rare to come by..",
    "so congrats on being a damb kit!!",
    "we've also received news that its damb kits birthday today!!", //>7
    "happy birthday my damb flowe kit!!!",
    "heres a gift for u.", //>9
    "pap will send his very best to deliver it to u..",
    "hop u like it..",
    "anyways thats all for now..", //>12
    "thanks for joining us on this experience!!",
    "until next time!!!",
  ];
  const message = textDisplay[index];

  function handleClick() {
    if (index < textDisplay.length - 1) {
      setIndex(index + 1);
      if (index > 0) {
        setImage("/kitscale1.png");
      }
      if (index > 2) {
        setImage("/kitscale2.png");
      }
      if (index > 3) {
        setImage("/kitscale3.png");
      }
      if (index > 7) {
        setImage("/birthday.jpeg");
      }
      if (index > 9) {
        setImage("/gift.png");
      }
      if (index > 12) {
        setImage("/birthday.jpeg");
      }
    } else {
      router.push("/");
    }
  }

  return (
    <div className="flex flex-col h-full justify-center items-center text-rose-50 gap-2">
      <img src={image} className="h-2/3" />
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

export default Score;
