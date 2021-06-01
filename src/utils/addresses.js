export const uniLPAddr = "0x288d25592a995cA878B79762Cb8Ec5a95d2e888a";
export const sushiLPAddr = "0x4a8428d6a407e57fF17878e8DB21b4706116606F";
export const bproAddr = "0xbbbbbbb5aa847a2003fbc6b5c16df0bd1e725f61";
export const rewardsUrl = "https://bip1.bprotocol.org/";
export const getCoinPrice = (addr) =>
  `https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=${addr}&vs_currencies=usd`;
export const bproRewardPerMonth = 250000 / 6;
