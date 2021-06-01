import * as React from "react";
import {
  Box,
  Flex,
  HStack,
  List,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { HiCheckCircle } from "react-icons/hi";
import UserEarningStats from "./UserEarningStats";
import { numberWithCommas } from "../utils/helper";

const FeatureItem = ({ children }) => (
  <HStack textAlign="center">
    <Box
      flexShrink={0}
      as={HiCheckCircle}
      fontSize="xl"
      color={mode("blue.500", "blue.300")}
    />
    <Text>{children}</Text>
  </HStack>
);
const PriceDisplay = (props) => {
  const { currency, price, ...rest } = props;
  return (
    <Flex
      w="100%"
      align="center"
      fontWeight="extrabold"
      {...rest}
      justifyContent="center"
    >
      <Text fontSize="4xl" lineHeight="1" marginEnd="2">
        $
      </Text>
      <Text fontSize="2.55rem" lineHeight="1" letterSpacing="tight">
        {price.toFixed(2)}
      </Text>
    </Flex>
  );
};

export const PricingCard = (props) => {
  const {
    features,
    name,
    description,
    onClick,
    price,
    currency,
    colorScheme: c,
    ...rest
  } = props;

  return (
    <Box
      bg={mode("white", "gray.700")}
      shadow="md"
      w="full"
      maxW="2xl"
      mx="auto"
      rounded="lg"
      overflow="hidden"
      textAlign="center"
      {...rest}
    >
      <Box bg="#d4f1e1" px="4" py="4" color="#0fc264">
        <Text
          fontWeight="bold"
          fontSize="1.25rem"
          fontWeight="900"
          color="gray.700"
          textTransform="uppercase"
          pb="1"
        >
          {name}
        </Text>
        <PriceDisplay
          my="2"
          currency="$"
          price={price * 5}
          currency={currency}
        />
        <Text fontWeight="800" letterSpacing="wider" fontSize="lg">
          {price.toFixed(2) + " BPRO"}
        </Text>
      </Box>
      <Box px="6" py="6" borderBottomWidth="1px" color="gray.600">
        <List stylePosition="outside" spacing="4">
          <FeatureItem>
            Your LP tokens consists of{" "}
            <b>{numberWithCommas(props?.userAprInfo?.userBPROBalance)}</b> BPRO
            + <b>{numberWithCommas(props?.userAprInfo?.userWETHBalance)}</b>{" "}
            WETH
          </FeatureItem>
          <FeatureItem>
            You are staking{" "}
            <b>{numberWithCommas(props?.userAprInfo?.lpBalance)}</b>{" "}
            [BPRO]-[WETH] LP
          </FeatureItem>
          <FeatureItem>
            Your total investment is{" "}
            <b>
              {numberWithCommas(
                props?.userAprInfo?.userBPROBalance *
                  props?.userAprInfo?.bproPrice *
                  2
              ) + " $"}
            </b>
          </FeatureItem>
        </List>
      </Box>
      <Box px="6" py="6">
        <UserEarningStats userAprInfo={props.userAprInfo} />
      </Box>
    </Box>
  );
};
