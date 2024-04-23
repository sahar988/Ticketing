import { NavLink } from "react-router-dom";
import {
  Box,
  Flex,
  // HStack,
  Link,
  IconButton,
  Icon,
  Text,
  // Stack,
  useColorMode,
  useDisclosure,
  useColorModeValue as mode,
  MenuItem,
  Menu,
  MenuList,
  MenuButton,
  ButtonGroup,
  HStack,
  Stack,
} from "@chakra-ui/react";

import { Link as ReactLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
// import { GiWorld } from "react-icons/gi";
import { useState } from "react";
// import { useSelector } from "react-redux";
// import { MdAdminPanelSettings } from "react-icons/md";

function PageNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { logoHover, setLogoHover } = useState();
  return (
    <Box bg={mode("blue.200", "blue.900")} px={4}>
      <Flex w="80%" mx="auto" h="16" alignItems="center" justifyContent="space-between">
        <IconButton
          bg={mode("blue.200", "blue.900")}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack w="100%" justifyContent="space-between">
          <Link
            as={ReactLink}
            to="/app"
            style={{ textDecoration: "none" }}
            onMouseEnter={() => setLogoHover(true)}
            onMouseLeave={() => setLogoHover(false)}
          >
            <Flex alignItems="center">
              <Text fontWeight="extrabold" color={mode("grey.600", "grey.400")}>
                Ticket Management
              </Text>
            </Flex>
          </Link>
          <HStack display={{ base: "none", md: "flex" }} pl="10">
            <NavLink to="/tickets">Ticket List</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/app">Home Page</NavLink>
            <Icon
              cursor="pointer"
              as={colorMode === "light" ? MoonIcon : SunIcon}
              onClick={() => toggleColorMode()}
              w="40px"
            />
          </HStack>
        </HStack>
      </Flex>
      {isOpen ? (
            <Box pb="4" display={{ md: "none" }}>
              <Stack as="nav" spacing="4">
                <NavLink to="/tickets">Ticket List</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/app">Home Page</NavLink>
              </Stack>
            </Box>
          ) : null}
    </Box>
  );
}
export default PageNav;
