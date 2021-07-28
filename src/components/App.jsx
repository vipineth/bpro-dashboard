import * as React from "react";
import { Box, Flex, useColorModeValue as mode } from "@chakra-ui/react";

import { Stats } from "./Stats";
import { UserReward } from "./UserReward";
import Sidebar from "./Sidebar";
import { MobileTopBar } from "./MobileHeader";

export const App = (props) => {
  return (
    <Flex h="100vh" flexDirection={{ base: "column", md: "row" }}>
      <MobileTopBar />
      <Sidebar
        display={{
          base: "none",
          md: "flex",
        }}
      />
      <Box
        bg={mode("gray.50", "gray.800")}
        flex="1"
        overflow="auto"
        p={{
          base: "1",
          md: "6",
        }}
      >
        <Box
          rounded="lg"
          border={{
            base: "none",
            md: "3px dashed currentColor",
          }}
          color={mode("gray.300", "gray.700")}
          py={{
            base: "1",
            md: "8",
          }}
          px={{
            base: ".5",
            md: "8",
          }}
          pb="6"
        >
          <Stats />

          <UserReward aprPerDay={props.aprPerDay} />
        </Box>
      </Box>
    </Flex>
  );
};
