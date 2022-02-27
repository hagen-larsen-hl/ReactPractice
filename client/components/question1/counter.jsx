import { useState, useEffect } from "react";
import { Button } from "../common/button";

export const Counter = ({ min, max }) => {
  const [count, setCount] = useState(0);

  useEffect(async () => {
    let start = 0;
    if (max < start) {
      start = max;
    } else if (min > start) {
      start = min;
    }
    setCount(start);
  }, []);

  const increment = async () => {
    if (count + 1 <= max) {
      setCount(count + 1);
    }
  };

  const decrement = async () => {
    if (count - 1 >= min) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex border-2 rounded m-4 p-4">
      <div className="">
        <strong>
          Min: {min} Max: {max}
        </strong>
        <div>
          <strong>Count: {count}</strong>
        </div>
        <div className="py-2">
          <Button onClick={() => decrement()}>Decrement</Button>
          <Button onClick={() => increment()}>Increment</Button>
        </div>
      </div>
    </div>
  );
};
