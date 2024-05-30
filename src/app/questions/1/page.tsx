"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Question1 = () => {
  const router = useRouter();
  const image = "/munchkin.jpeg";
  const question = "Q1. wat type of cat is dis?";
  const answers: string[] = [
    "A. munchkin",
    "B. siamese",
    "C. poopoocat",
    "D. is dawg.",
  ];

  function wrong() {
    router.push("/questions/1/wrong");
  }

  function correct() {
    router.push("/questions/1/correct");
  }

  function handleClick(answer: number) {
    switch (answer) {
      case 0:
        console.log(answers[0]);
        correct();
        break;
      case 1:
        console.log(answers[1]);
        wrong();
        break;
      case 2:
        console.log(answers[2]);
        wrong();
        break;
      case 3:
        console.log(answers[3]);
        wrong();
        break;
      default:
        console.log("no answer");
    }
  }
  return (
    <div>
      <div className="flex h-svh justify-center items-center text-rose-50">
        <div className="flex flex-col justify-center gap-2 h-full">
          <img src={image} className="h-2/3" />
          <div className="text-rose-600">{question}</div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                handleClick(0);
              }}
              className="text-rose-50 bg-rose-400 p-2 hover:bg-rose-500 hover:cursor-pointer"
            >
              {answers[0]}
            </button>
            <button
              onClick={() => {
                handleClick(1);
              }}
              className="text-rose-50 bg-rose-400 p-2 hover:bg-rose-500 hover:cursor-pointer"
            >
              {answers[1]}
            </button>
            <button
              onClick={() => {
                handleClick(2);
              }}
              className="text-rose-50 bg-rose-400 p-2 hover:bg-rose-500 hover:cursor-pointer"
            >
              {answers[2]}
            </button>
            <button
              onClick={() => {
                handleClick(3);
              }}
              className="text-rose-50 bg-rose-400 p-2 hover:bg-rose-500 hover:cursor-pointer"
            >
              {answers[3]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question1;
