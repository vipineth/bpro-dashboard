import { useEffect, useState } from "react";
import { Contract, Provider } from "ethcall";
import { provider } from "../utils/index";
import { utils } from "ethers";

export default function useERC20(contractAddress, ABI, userAddress) {
  let [contractInfo, setContractInfo] = useState();
  useEffect(() => {
    async function main() {
      const ethcallProvider = new Provider();
      await ethcallProvider.init(provider);
      const contract = new Contract(contractAddress, ABI);
      const calls = [contract.balanceOf(userAddress)];
      const [balance] = await ethcallProvider.all(calls);
      setContractInfo({
        balance: utils.formatEther(balance),
      });
    }
    main();
  }, [userAddress]);
  return contractInfo;
}
