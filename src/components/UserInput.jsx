import { FormEvent, ChangeEvent, useState } from "react";
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Text,
  Flex,
} from "@chakra-ui/react";

import { utils } from "ethers";
import useFetch from "../utils/useFetch";
import { PricingCard } from "./PricingCard";

import { bproAddr, sushiLPAddr, uniLPAddr } from "../utils/addresses";
import { ERC_20_ABI, UNI_ABI } from "../utils/abis";
import {
  getAPRDetails,
  getERC20Info,
  getLPContractInfo,
} from "../utils/contractHelper";
import { Loader } from "./Loader";

export function UserInput() {
  const [ethAddress, setETHAddress] = useState("");
  const [state, setState] = useState("initial");
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState("");
  const [usersReward] = useFetch();
  let [userAprInfo, setUserAprInfo] = useState(null);

  async function getUserInfo(userAddr) {
    let [uniLPinfo, sushiLPinfo, bproUNI, bproSUSHI] = await Promise.all([
      getLPContractInfo(uniLPAddr, UNI_ABI, userAddr),
      getLPContractInfo(sushiLPAddr, UNI_ABI, userAddr),
      getERC20Info(bproAddr, ERC_20_ABI, uniLPAddr),
      getERC20Info(bproAddr, ERC_20_ABI, sushiLPAddr),
    ]);
    return getAPRDetails(uniLPinfo, sushiLPinfo, bproUNI, bproSUSHI);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!utils.isAddress(ethAddress)) {
      setError("Please enter a valid ETH address!");
      setState("initial");
      return;
    }
    setError(false);
    setState("submitting");

    getUserInfo(ethAddress)
      .then((info) => {
        setState("success");
        setIsLoaded(true);
        setUserAprInfo({ ...info });
        setTimeout(() => {
          setState("initial");
        }, 3000);
      })
      .catch(() => {
        setError("Something went wrong while fetching data!");
        setState("");
      })
      .finally(() => {
        setError("");
      });
  }

  return (
    <>
      <Flex align={"center"} justify={"center"} py="10" direction="column">
        <Stack
          direction="row"
          as={"form"}
          spacing={"12px"}
          width="70%"
          onSubmit={handleSubmit}
        >
          <FormControl>
            <Input
              variant="solid"
              borderWidth={2}
              height="12"
              color={"gray.800"}
              bg="white"
              _placeholder={{
                color: "gray.500",
              }}
              borderColor={useColorModeValue("gray.300", "gray.700")}
              id={"ethAddress"}
              type={"ethAddress"}
              required
              placeholder={"Enter Your ETH Address"}
              aria-label={"Enter Your ETH Address"}
              value={ethAddress}
              onChange={({ target }) => {
                setETHAddress(target.value);
                setError("");
              }}
              p="4"
            />
          </FormControl>
          <FormControl w="30%">
            <Button
              height="12"
              _hover={{
                background: "green.200",
                color: "gray.800",
              }}
              bg={state === "success" ? "#3182ce" : "#3182ce"}
              color="white"
              isLoading={state === "submitting"}
              loadingText="Loading"
              w="100%"
              type={state === "success" ? "button" : "submit"}
            >
              {state === "success" ? "Submit" : "Submit"}
            </Button>
          </FormControl>
        </Stack>
        <Text
          mt={2}
          textAlign={"center"}
          color={error ? "red.500" : "gray.500"}
        >
          {error}
        </Text>
      </Flex>
      {isLoaded ? (
        <PricingCard
          name="Total Reward"
          price={usersReward?.[ethAddress.toLowerCase()] || 0}
          currency="USD"
          userAprInfo={userAprInfo ? { ...userAprInfo } : null}
        />
      ) : (
        <Loader state={isLoaded} />
      )}
    </>
  );
}
