import {
  Box,
  Link,
  Flex,
  Heading,
  Img,
  Stack,
  Text,
  SimpleGrid,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
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
            BPRO LP Mining has ENDED
          </Heading>
          <Text
            mt="4"
            fontSize="lg"
            textAlign={{
              base: "left",
              md: "center",
            }}
            color={mode("gray.500", "gray.400")}
          >
            To check the final reward that you received you can enter your ETH
            address below.
          </Text>
          <Text
            mt="4"
            fontSize="xl"
            textAlign={{
              base: "left",
              md: "center",
            }}
            color={mode("gray.500", "gray.400")}
          >
            Rewards (76k BPRO) were distributed in{" "}
            <Link
              href="https://etherscan.io/tx/0xd1075b2c88791d3eed9978425e492e8b45e88266e34324476b320f9747841547"
              target="_blank"
              rel="noopener"
              textDecoration="underline"
            >
              this transaction <ExternalLinkIcon />
            </Link>
          </Text>
        </Flex>
        <UserInput />
      </Box>
    </Box>
  );
};
