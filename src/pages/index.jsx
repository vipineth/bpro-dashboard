import Head from "next/head";
import { App } from "../components/App";
import { uniLPAddr, sushiLPAddr, bproAddr } from "../utils/addresses";
import { ERC_20_ABI, UNI_ABI } from "../utils/abis";
import {
  getAPRDetails,
  getERC20Info,
  getLPContractInfo,
} from "../utils/contractHelper";
import { useEffect, useState } from "react";
let userAddress = "0xe864166688e95618920e32619753e23175f189ce";

function Home() {
  let [aprPerDay, setAprPerDay] = useState(0);
  useEffect(() => {
    async function main() {
      let [uniLPinfo, sushiLPinfo, bproUNI, bproSUSHI] = await Promise.all([
        getLPContractInfo(uniLPAddr, UNI_ABI, userAddress),
        getLPContractInfo(sushiLPAddr, UNI_ABI, userAddress),
        getERC20Info(bproAddr, ERC_20_ABI, uniLPAddr),
        getERC20Info(bproAddr, ERC_20_ABI, sushiLPAddr),
      ]);
      let { aprPerDay } = getAPRDetails(
        uniLPinfo,
        sushiLPinfo,
        bproUNI,
        bproSUSHI
      );

      setAprPerDay(aprPerDay);
    }
    main();
  }, []);

  return (
    <>
      <Head>
        <title>B.Protocol Liquidity Reward Calculator</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <App aprPerDay={aprPerDay} />
    </>
  );
}

export default Home;
