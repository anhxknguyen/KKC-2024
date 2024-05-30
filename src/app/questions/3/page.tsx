"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Question3 = () => {
  const router = useRouter();
  const image = "/peepoo.jpeg";
  const question = "Q3. Fill in the blank: 'iiiiiissss _______ man.'";
  let [error, setError] = useState(false);

  function wrong() {
    router.push("/questions/3/wrong");
  }

  function correct() {
    router.push("/questions/3/correct");
  }

  function handleSubmit() {
    const input = (document.getElementById("answerInput") as HTMLInputElement)
      .value;
    if (input == "peepeepoopoo" || input == "peepo" || input == "peepoo") {
      correct();
    } else {
      wrong();
    }
  }

  return (
    <div>
      <div className="flex h-svh justify-center items-center text-rose-50">
        <div className="flex flex-col justify-center gap-2 h-full">
          <img src={image} className="h-2/3" />
          <div className="text-rose-600">{question}</div>
          <div className="text-rose-50 bg-rose-400 p-2 rounded w-fit">
            NOTE: Enter with no spaces + lowercase
          </div>

          <div className="flex items-center gap-2">
            <p className="text-rose-600">&lsquo;iiiiiissss</p>
            <input
              id="answerInput"
              type="text"
              placeholder="ur answer here"
              className={`bg-rose-50 text-rose-400 p-2 rounded ${error ? "border-rose-400 border-2" : ""}`}
              required
            />
            <p className="text-rose-600">man&rsquo;</p>
            <input
              type="submit"
              onClick={handleSubmit}
              className="bg-rose-400 text-rose-50 p-2 rounded hover:bg-rose-500 hover:cursor-pointer"
              value="submit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question3;
