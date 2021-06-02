import * as React from "react";
import {
  Box,
  Flex,
  Stack,
  Image,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import { BiHome } from "react-icons/bi";

import { NavGroup } from "./NavGroup";
import { NavItem } from "./NavItem";
import { Stats } from "./Stats";
import { UserReward } from "./UserReward";
import { HiOutlineExternalLink } from "react-icons/hi";
import { SocialMediaLinks } from "./SocialMediaLinks";

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
            <Stack
              spacing="8"
              flex="1"
              overflow="auto"
              pt="8"
              justifyContent="space-between"
            >
              <Stack spacing="10">
                <Image objectFit="cover" src="/logo.svg" alt="Segun Adebayo" />
                <NavItem active icon={<BiHome />} label="Check LP Reward" />
                {/* <NavItem icon={<BiCommentAdd />} label="Check Reward" /> */}
              </Stack>
              <NavGroup label="Important Links">
                <a href="https://app.bprotocol.org/app">
                  <NavItem
                    icon={<HiOutlineExternalLink />}
                    label="B.Protocol App"
                  />
                </a>
                <a href="https://scattershot.page/#/bpro.eth/proposal/QmR1rTEAnmT4CwYvC3MpkBsddLuWc5v5fUvwKEgUW6gwVM">
                  <NavItem
                    icon={<HiOutlineExternalLink />}
                    label="Know About BIP 1"
                  />
                </a>
                <a href="https://app.bprotocol.org/faq">
                  <NavItem icon={<HiOutlineExternalLink />} label="FAQ" />
                </a>

                <a href="https://v2.info.uniswap.org/pair/0x288d25592a995ca878b79762cb8ec5a95d2e888a">
                  <NavItem icon={<HiOutlineExternalLink />} label="Uniswap" />
                </a>
                <a href="https://analytics.sushi.com/pairs/0x4a8428d6a407e57ff17878e8db21b4706116606f">
                  <NavItem icon={<HiOutlineExternalLink />} label="Sushiswap" />
                </a>
                <SocialMediaLinks />
              </NavGroup>
            </Stack>
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
