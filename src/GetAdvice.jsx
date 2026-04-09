import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function GetAdvice() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function FetchAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }
  return (
    <>
      <p>{advice}</p>
      <button onClick={FetchAdvice}>Get Advice</button>
      <Message1 count={count} />
    </>
  );
}
function Message1({ count }) {
  return <p>You have requested advice {count} times</p>;
}
