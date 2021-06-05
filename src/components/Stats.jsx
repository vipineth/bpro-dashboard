import {
  Box,
  Heading,
  Stack,
  StackDivider,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { HiCheckCircle, HiClock, HiExclamationCircle } from "react-icons/hi";
import { formatPercentage } from "../utils/helper";
import { StatCard } from "./StatCard";

export const Stats = ({ aprPerDay }) => {
  let aprData = [
    { label: "Daily APR", value: formatPercentage(aprPerDay) },
    { label: "Monthly APR", value: formatPercentage(aprPerDay * 30) },
    { label: "Yearly APR", value: formatPercentage(aprPerDay * 365) },
  ];
  return (
    <Box as="section" bg={mode("gray.50", "gray.800")}>
      <Box
        maxW={{
          base: "xl",
          md: "7xl",
        }}
        mx="auto"
      >
        <Box bg={mode("gray.800", "white")} p="10" rounded="xl" shadow="base">
          <Stack
            justify="space-between"
            direction={{
              base: "column",
              md: "row",
            }}
            divider={<StackDivider />}
          >
            {aprData.map(({ label, value }) => (
              <StatCard
                key={label}
                accentColor="green.500"
                icon={<HiClock />}
                data={{
                  label,
                  value,
                }}
              />
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
