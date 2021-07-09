import { rewardsUrl } from "./addresses";

async function useFetch(url = rewardsUrl) {
  const res = await fetch(url);
  const allRewards = await res.json();
  return allRewards.rewards;
}

export default useFetch;
