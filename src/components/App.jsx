import * as React from "react";
import {
  Box,
  Center,
  Circle,
  Flex,
  Heading,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import {
  BiBuoy,
  BiCog,
  BiCommentAdd,
  BiCreditCard,
  BiEnvelope,
  BiHome,
  BiUserCircle,
  BiWallet,
} from "react-icons/bi";

import { NavGroup } from "./NavGroup";
import { NavItem } from "./NavItem";
import { Stats } from "./Stats";
import { UserReward } from "./UserReward";

export const App = (props) => {
  return (
    <Box overflow="hidden" position="relative">
      <Flex h="full" id="app-container" minH="100vh">
        <Box w="64" bg="gray.900" color="white" fontSize="sm">
          <Flex
            h="full"
            direction="column"
            px="4"
            py="4"
            position="fixed"
            maxHeight="100vh"
          >
            <Stack spacing="8" flex="1" overflow="auto" pt="8">
              <Stack spacing="1">
                <NavItem active icon={<BiHome />} label="Protocol Stats" />
                <NavItem icon={<BiCommentAdd />} label="Check Reward" />
              </Stack>
              <NavGroup label="Important Links">
                <a href="https://app.bprotocol.org/app">
                  <NavItem icon={<BiCreditCard />} label="B.Protocol App" />
                </a>
                <a href="https://app.bprotocol.org/faq">
                  <NavItem icon={<BiUserCircle />} label="FAQ" />
                </a>
                <a href="https://discord.gg/bJ4guuw">
                  <NavItem icon={<BiUserCircle />} label="Discord" />
                </a>
                <a href=" https://twitter.com/bprotocoleth">
                  <NavItem icon={<BiUserCircle />} label="Twitter" />
                </a>
                <a href="https://scattershot.page/#/bpro.eth/proposal/QmR1rTEAnmT4CwYvC3MpkBsddLuWc5v5fUvwKEgUW6gwVM">
                  <NavItem icon={<BiUserCircle />} label="Know About BIP 1" />
                </a>
              </NavGroup>
            </Stack>
            <Box>
              <Stack spacing="1">
                <NavItem
                  subtle
                  icon={<BiBuoy />}
                  label="Latest Block"
                  endElement={<Circle size="2" bg="blue.400" />}
                />
              </Stack>
            </Box>
          </Flex>
        </Box>
        <Box bg={mode("gray.50", "gray.800")} flex="1" p="6" minH="100vh">
          <Box
            rounded="lg"
            border="3px dashed currentColor"
            color={mode("gray.300", "gray.700")}
            pb="8"
          >
            <Stats aprPerDay={props.aprPerDay} />
            <UserReward aprPerDay={props.aprPerDay} />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
