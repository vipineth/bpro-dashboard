import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import Sidebar from "./Sidebar";
import { useMobileMenuState } from "./useMobileMenuState";

export const MobileTopBar = () => {
  const { isOpen, onClose, onOpen } = useMobileMenuState();
  return (
    <Flex
      align="center"
      justify="space-between"
      py="2"
      px="4"
      bg="gray.800"
      color="white"
      display={{
        base: "flex",
        md: "none",
      }}
      borderBottomWidth="1px"
    >
      <Image objectFit="cover" src="/logo.svg" alt="B.Protocol Logo" />
      <IconButton
        onClick={onOpen}
        variant="unstyled"
        display="flex"
        cursor="pointer"
        aria-label="Menu"
        color="white"
        icon={<HiOutlineMenu fontSize="1.5rem" />}
      />
      <Drawer
        size="xs"
        placement="left"
        isOpen={isOpen}
        blockScrollOnMount={false}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent
          bg="gray.900"
          color="white"
          shadow="none"
          position="relative"
          maxW="64"
        >
          <Sidebar width="full" height="full" bg="inherit" border="0" />
          <DrawerCloseButton
            bg="blue.500"
            _hover={{
              bg: "blue.600",
            }}
            _active={{
              bg: "blue.700",
            }}
            rounded="0"
            position="absolute"
            color="white"
            right="-8"
            top="0"
          />
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
