import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Stack,
  Text,
  SimpleGrid,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";

import { PricingCard } from "./PricingCard";
import { UserInput } from "./UserInput";

export const UserReward = () => {
  return (
    <Box
      as="section"
      bg={mode("gray.800", "gray.600")}
      py="12"
      mt="2"
      rounded="xl"
      shadow="base"
    >
      <Box
        maxW={{
          base: "xl",
          md: "5xl",
        }}
        mx="auto"
        px={{
          base: "6",
          md: "8",
        }}
      >
        <Flex direction="column" align="center" maxW="2xl" mx="auto">
          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="extrabold"
            textAlign="center"
          >
            Check Your BPRO LP Reward
          </Heading>
          <Text
            mt="4"
            fontSize="xl"
            textAlign={{
              base: "left",
              md: "center",
            }}
            color={mode("gray.500", "gray.400")}
          >
            You get rewarded for providing liquidity to (BPRO-ETH) on Sushiswap
            and Uniswap pools
          </Text>
        </Flex>
        <UserInput />
      </Box>
    </Box>
  );
};
