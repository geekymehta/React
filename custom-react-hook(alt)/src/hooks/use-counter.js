import { useEffect, useState } from "react";

const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const identifier = setInterval(() => {
      if (forwards === true) {
        setCounter((prevCounter) => prevCounter + 1);
      } else if (forwards === false) {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);
    return () => clearInterval(identifier);
  }, [forwards]);
  return counter;
};

export default useCounter;
