import { useEffect, useState } from "react";
import { Contract, Provider } from "ethcall";
import { provider } from "../utils/index";
import { utils } from "ethers";
import { getCoinPrice } from "./addresses";
import { ERC_20_ABI } from "./abis";

export default function useContract(contractAddress, ABI, userAddress) {
  let [contractInfo, setContractInfo] = useState();
  useEffect(() => {
    async function main() {
      const ethcallProvider = new Provider();
      await ethcallProvider.init(provider);
      const contract = new Contract(contractAddress, ABI);
      const calls = [
        contract.decimals(),
        contract.token0(),
        contract.token1(),
        contract.symbol(),
        contract.name(),
        contract.totalSupply(),
        contract.balanceOf(userAddress),
        contract.getReserves(),
      ];
      const [
        decimals,
        token0,
        token1,
        symbol,
        name,
        totalSupply,
        balance,
        reserves,
      ] = await ethcallProvider.all(calls);
      let tokens = [token0, token1].map((t) => t.toLowerCase());
      let tokensInfo = await Promise.all(
        tokens.map((t) => {
          const tokenContract = new Contract(t, ERC_20_ABI);
          return ethcallProvider.all([
            tokenContract.symbol(),
            tokenContract.name(),
          ]);
        })
      );
      let tokensPrice = await Promise.all(
        tokens.map((t) => {
          return fetch(getCoinPrice(t)).then((res) => res.json());
        })
      );
      let tokensDetails = tokens.reduce((acc, cv, i) => {
        acc.push({
          name: tokensInfo[i][1],
          symbol: tokensInfo[i][0],
          contract: cv,
          priceInUsd: tokensPrice[i][cv].usd,
        });
        return acc;
      }, []);

      setContractInfo({
        symbol,
        name,
        decimals,
        token0: token0,
        token1: token1,
        reserve0: utils.formatEther(reserves._reserve0),
        reserve1: utils.formatEther(reserves._reserve1),
        totalSupply: totalSupply / 10 ** decimals,
        balance: balance / 10 ** decimals,
        contract: contractAddress,
        tokensDetails,
      });
    }
    main();
  }, [userAddress]);
  return contractInfo;
}
