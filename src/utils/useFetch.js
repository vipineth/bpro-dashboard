import { useEffect, useState } from "react";
import { rewardsUrl } from "./addresses";

function useFetch(url = rewardsUrl) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);

        const allRewards = await res.json();
        setResponse(allRewards.rewards);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return [response, error];
}

export default useFetch;
