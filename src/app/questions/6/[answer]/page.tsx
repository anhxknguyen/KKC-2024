"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AnswerPage = ({ params }: { params: { answer: string } }) => {
  const router = useRouter();
  const correctMessage: string = "DAS RIGHT!! DIS IS FWOG!! U CAN PASS!!";
  const wrongMessage: string = "HEY!!! DAS NOT FWOG!!!";
  let [error, setError] = useState(false);

  function handleClick() {
    router.push("/calculate-score");
  }

  function handleSubmit() {
    const input = (document.getElementById("sorryInput") as HTMLInputElement)
      .value;
    if (input == "i very berry sa!!!") {
      router.push("/calculate-score");
    } else {
      setError(true);
    }
  }

  if (params.answer == "correct") {
    return (
      <div className="flex flex-col h-full justify-center items-center gap-2">
        <img src="/correct-q6.png" className="h-2/3" />
        <div
          className="bg-rose-400 text-rose-50 h-fit px-6 pt-6 pb-3 rounded text-xl flex flex-col gap-2 items-end hover:bg-rose-500 hover:cursor-pointer"
          onClick={handleClick}
        >
          <div>{correctMessage}</div>
          <div className="right-6 text-sm">
            see results <span className="align-middle text-xl">&rarr;</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col h-full justify-center items-center gap-2">
      <img src="/wrong-q6.png" className="h-2/3" />
      <div className="bg-rose-400 text-rose-50 h-fit px-6 pt-6 pb-6 rounded text-xl flex flex-col gap-2 items-end">
        <div>{wrongMessage}</div>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-rose-600">
          {error
            ? "nop!! you must be verry berry sa!!! (type 'i very berry sa!!!')"
            : "Type 'i sa...' to continue."}
        </p>
        <input
          id="sorryInput"
          type="text"
          placeholder="i sa..."
          className={`bg-rose-50 text-rose-400 p-2 rounded ${error ? "border-rose-400 border-2" : ""}`}
        />
        <input
          type="submit"
          onClick={handleSubmit}
          className="bg-rose-400 text-rose-50 p-2 rounded hover:bg-rose-500 hover:cursor-pointer"
          value="apologize.."
        />
      </div>
    </div>
  );
};

export default AnswerPage;
