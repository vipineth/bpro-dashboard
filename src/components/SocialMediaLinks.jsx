import { ButtonGroup, IconButton } from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaDiscord, FaMedium, FaTwitter } from "react-icons/fa";

export const SocialMediaLinks = (props) => (
  <ButtonGroup
    variant="ghost"
    color="gray.400"
    {...props}
    align="center"
    py="4"
    mx="auto"
  >
    <IconButton
      as="a"
      href="https://discord.gg/bJ4guuw"
      aria-label="LinkedIn"
      icon={<FaDiscord fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="https://github.com/backstop-protocol"
      aria-label="GitHub"
      icon={<FaGithub fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="https://twitter.com/bprotocoleth"
      aria-label="Twitter"
      icon={<FaTwitter fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="https://medium.com/b-protocol"
      aria-label="Medium"
      icon={<FaMedium fontSize="20px" />}
    />
  </ButtonGroup>
);
