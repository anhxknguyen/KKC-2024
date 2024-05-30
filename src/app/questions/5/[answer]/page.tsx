"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AnswerPage = ({ params }: { params: { answer: string } }) => {
  const router = useRouter();
  const correctMessage: string =
    "dasssss right. is kitty playhouse!! do u mi? (type 'no' or 'i mi...')";
  const wrongMessage: string =
    "nop!!! is kitty playhouse!! do u mi? (type 'no' or 'i mi...')";
  let [error, setError] = useState(false);

  function handleSubmit() {
    const input = (document.getElementById("sorryInput") as HTMLInputElement)
      .value;
    if (input == "i mi...") {
      router.push("/questions/6"); // miss
    } else {
      setError(true);
    }
  }

  if (params.answer == "correct") {
    return (
      <div className="flex flex-col h-full justify-center items-center gap-2">
        <img src="/correct-q5.jpeg" className="h-2/3" />
        <div className="bg-rose-400 text-rose-50 h-fit px-6 pt-6 pb-6 rounded text-xl flex flex-col gap-2 items-end">
          <div>{correctMessage}</div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-rose-600">
            {error ? "u dont mi...? 😿" : "answer here ple: "}
          </p>
          <input
            id="sorryInput"
            type="text"
            placeholder="i mi..."
            className={`bg-rose-50 text-rose-400 p-2 rounded ${error ? "border-rose-400 border-2" : ""}`}
          />
          <input
            type="submit"
            onClick={handleSubmit}
            className="bg-rose-400 text-rose-50 p-2 rounded hover:bg-rose-500 hover:cursor-pointer"
            value="answer.."
          />
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col h-full justify-center items-center gap-2">
      <img src="/wrong-q5.jpeg" className="h-2/3" />
      <div className="bg-rose-400 text-rose-50 h-fit px-6 pt-6 pb-6 rounded text-xl flex flex-col gap-2 items-end">
        <div>{wrongMessage}</div>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-rose-600">
          {error ? "u dont mi...? 😿" : "answer here ple: "}
        </p>
        <input
          id="sorryInput"
          type="text"
          placeholder="i mi..."
          className={`bg-rose-50 text-rose-400 p-2 rounded ${error ? "border-rose-400 border-2" : ""}`}
        />
        <input
          type="submit"
          onClick={handleSubmit}
          className="bg-rose-400 text-rose-50 p-2 rounded hover:bg-rose-500 hover:cursor-pointer"
          value="answer.."
        />
      </div>
    </div>
  );
};

export default AnswerPage;
