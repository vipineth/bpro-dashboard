import { Contract, Provider } from "ethcall";
import { provider } from "../utils/index";
import { utils } from "ethers";
import { bproRewardPerMonth, getCoinPrice } from "./addresses";
import { ERC_20_ABI } from "./abis";

export async function getLPInfo(contractAddress, ABI) {
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
    contract.getReserves(),
  ];
  const [decimals, token0, token1, symbol, name, totalSupply, reserves] =
    await ethcallProvider.all(calls);

  return {
    decimals,
    token0,
    token1,
    symbol,
    name,
    totalSupply,
    reserves,
  };
}

export async function getLPContractInfo(
  contractAddress,
  ABI,
  userAddress = ""
) {
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

  return {
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
  };
}

export async function getERC20Info(contractAddress, ABI, userAddress) {
  const ethcallProvider = new Provider();
  await ethcallProvider.init(provider);
  const contract = new Contract(contractAddress, ABI);
  const calls = [contract.balanceOf(userAddress)];
  const [balance] = await ethcallProvider.all(calls);
  return {
    balance: utils.formatEther(balance),
  };
}

export function getAPRDetails(uniLPinfo, sushiLPinfo, bproUNI, bproSUSHI) {
  let userBPROBalance =
    (sushiLPinfo.balance * bproSUSHI.balance) / sushiLPinfo.totalSupply +
    (uniLPinfo.balance * bproUNI.balance) / uniLPinfo.totalSupply;
  let rewardPerBpro =
    bproRewardPerMonth / (Number(bproSUSHI.balance) + Number(bproUNI.balance));
  let rewardPerDay = (rewardPerBpro * userBPROBalance) / 30;
  let aprPerDay = (rewardPerDay * 100) / (userBPROBalance * 2);

  let userWETHBalance =
    (userBPROBalance * uniLPinfo?.tokensDetails[0].priceInUsd) /
    uniLPinfo?.tokensDetails[1].priceInUsd;

  function getPrice(symbol, arr = uniLPinfo.tokensDetails) {
    return arr.find((c) => c.symbol.toLowerCase() === symbol.toLowerCase())
      .priceInUsd;
  }

  return {
    userBPROBalance,
    userWETHBalance,
    rewardPerDay,
    aprPerDay,
    bproPrice: getPrice("bpro"),
    wethPrice: getPrice("weth"),
    lpBalance: (uniLPinfo?.balance || 0) + (sushiLPinfo?.balance || 0),
  };
}
