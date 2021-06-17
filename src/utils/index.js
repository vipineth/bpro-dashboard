import { ethers } from "ethers";
import { uniLPAddr } from "./addresses";
import { UNI_ABI } from "./abis";

const provider = new ethers.providers.AlchemyProvider(
  "mainnet",
  process.env.ALCHEMY_API
);

let contract = new ethers.Contract(uniLPAddr, UNI_ABI);

export { provider, contract };
