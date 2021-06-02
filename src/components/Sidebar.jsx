import {
  Box,
  Flex,
  Stack,
  Spacer,
  Image,
  Text,
  Divider,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { NavGroup } from "./NavGroup";
import { NavItem } from "./NavItem";
import { HiOutlineExternalLink } from "react-icons/hi";
import { SocialMediaLinks } from "./SocialMediaLinks";
import { BiHome } from "react-icons/bi";

function Sidebar(props) {
  return (
    <Box w="64" bg="gray.900" color="white" fontSize="sm" {...props}>
      <Flex
        w="64"
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
            <Image objectFit="cover" src="/logo.svg" alt="B.Protocol Logo" />
            <NavItem active icon={<BiHome />} label="Check LP Reward" />
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
                label="Learn about BIP-1"
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
            <Text
              mt="4"
              fontSize="sm"
              display="inline-block"
              wordBreak="break-word"
            >
              This project is developed and maintained by the community.
            </Text>
          </NavGroup>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Sidebar;
