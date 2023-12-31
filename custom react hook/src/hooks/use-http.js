import { useState } from "react";

const useHttp = (requestConfig, applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (body) => {
    setIsLoading(true);
    setError(null);
    try {
      console.log("useHttp body : ", requestConfig.body);
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method || "GET",
        header: requestConfig.header || {},
        body: JSON.stringify(body) || null,
      });
      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data, body);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }

    setIsLoading(false);
  };

  return { isLoading, error, sendRequest };
};

export default useHttp;
//"https://react-custom-http-hook-68481-default-rtdb.firebaseio.com/tasks.json"
