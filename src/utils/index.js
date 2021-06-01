import { ethers } from "ethers";
import { uniLPAddr } from "./addresses";
import { UNI_ABI } from "./abis";

let ethRPC =
  "https://eth-mainnet.alchemyapi.io/v2/w4vTDbDIJaCVea0TndS0pFYap8QGosU0";
const provider = new ethers.providers.JsonRpcProvider(ethRPC);

let contract = new ethers.Contract(uniLPAddr, UNI_ABI);

export { provider, contract };
