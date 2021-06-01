import {
  Box,
  Text,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Badge,
} from "@chakra-ui/react";

import { numberWithCommas } from "../utils/helper";

function StatsCard(props) {
  const { title, days, userAprInfo } = props;

  function getUsdPrice(days = 1) {
    return numberWithCommas(
      userAprInfo?.rewardPerDay * days * userAprInfo?.bproPrice
    );
  }
  return (
    <Box>
      <Badge variant="subtle" colorScheme="green" fontSize="0.9rem" mb="2">
        {title}
      </Badge>
      <Stat
        p="3"
        shadow={"xl"}
        border={"1px solid"}
        borderColor="green.700"
        rounded={"md"}
        color="gray.700"
      >
        <Box>
          <StatLabel fontWeight={"medium"} fontSize="1.05rem">
            {numberWithCommas(userAprInfo?.rewardPerDay * days)} BPRO
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight="800">
            {"$ " + getUsdPrice(days)}
          </StatNumber>
        </Box>
      </Stat>
    </Box>
  );
}

export default function UserEarningStats({ userAprInfo }) {
  return (
    <Box maxW="7xl" mx={"auto"} pb="4">
      <Text
        fontWeight="bold"
        fontSize="1.25rem"
        fontWeight="900"
        color="gray.600"
        textTransform="uppercase"
        pb="6"
      >
        Estimated Earnings
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, lg: 6 }}>
        <StatsCard title={"Daily"} userAprInfo={userAprInfo} days={1} />
        <StatsCard title={"Weekly"} userAprInfo={userAprInfo} days={7} />
        <StatsCard title={"Monthly"} userAprInfo={userAprInfo} days={30} />
      </SimpleGrid>
    </Box>
  );
}
