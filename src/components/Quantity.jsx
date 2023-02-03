import { useState } from "react";

export default function Quantity(prop) {
  const { stock } = prop;
  const [count, setCount] = useState(0);
  function counter(e) {
    let oper = e.target.innerText;

    if (oper === "+" && count < stock) {
      setCount(count + 1);
    } else if (oper === "-" && count > 0) {
      setCount(count - 1);
    }
    console.log(count > stock);
  }

  return (
    <div className="quantity">
      <button onClick={counter}>-</button>
      <p>{count}</p>
      <button onClick={counter}>+</button>
    </div>
  );
}
