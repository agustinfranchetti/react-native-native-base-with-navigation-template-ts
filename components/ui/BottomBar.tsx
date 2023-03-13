import { Box, Text, Icon, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";

import { FiHome, FiSettings } from "react-icons/fi";
import { MdInsights } from "react-icons/md";
import { FaMoneyBill } from "react-icons/fa";

const links = [
  { href: "/", label: "Home", icon: <FiHome /> },
  { href: "/expenses", label: "Expenses", icon: <FaMoneyBill /> },
  { href: "/stats", label: "Stats", icon: <MdInsights /> },
  { href: "/settings", label: "Settings", icon: <FiSettings /> },
];

const BottomBar = () => {
  const router = useRouter();
  return (
    <Box
      display={{ base: "flex", sm: "none", md: "none" }}
      flexDirection="row"
      position="fixed"
      bottom="0"
      left="0"
      w="100%"
      h="80px"
      bg="black"
      zIndex="100"
      alignItems="center"
      justifyContent="space-around"
      borderTop="1px solid #2D3748"
    >
      {links.map(({ href, label, icon }) => (
        <Box
          key={`${href}${label}`}
          display="flex"
          as={Link}
          href={href}
          passHref
        >
          <Icon
            fontSize="2xl"
            color={router.pathname === href ? "pink.500" : "gray.400"}
            fontWeight={router.pathname === href ? "bolder" : "bolder"}
          >
            {icon}
          </Icon>
        </Box>
      ))}
    </Box>
  );
};

export default BottomBar;
