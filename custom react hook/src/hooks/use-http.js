import { useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = () => {};

  return { isLoading, error, sendRequest };
};

export default useHttp;
