import {
  Badge,
  Box,
  Circle,
  Heading,
  HStack,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";

export const StatCard = (props) => {
  const { accentColor, icon, data } = props;
  const { label, value, change } = data;
  const isNegative = change < 0;
  return (
    <Stack mx="auto" spacing="3">
      <Box color={mode("gray.400", "gray.400")} fontWeight="medium">
        <Heading
          as="h3"
          size="sm"
          fontWeight="800"
          letterSpacing="wide"
          textAlign="center"
        >
          {label.toUpperCase()}
        </Heading>
      </Box>
      <HStack spacing="3">
        <Heading
          as="h1"
          size="2xl"
          fontWeight="bold"
          color="white"
          bgGradient="linear(to-l, #18d2c3, #1fe86b)"
          bgClip="text"
          fontSize="5xl"
          fontWeight="extrabold"
        >
          {value}
        </Heading>
      </HStack>
    </Stack>
  );
};
