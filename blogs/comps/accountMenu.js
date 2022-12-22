import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export const AccountMenu = ({ setToken }) => {
  const Router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    Router.push("/");
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"unstyled"}
        cursor={"pointer"}
        minW={0}
        fontSize="25px"
        fontWeight="bold"
        color="black"
        textDecoration="none"
      >
        Account
      </MenuButton>
      <MenuList>
        <Link href="/write">
          <MenuItem>Write a story</MenuItem>
        </Link>
        <Link href="/">
          <MenuItem>Stories</MenuItem>
        </Link>
        <MenuDivider />
        <MenuItem onClick={logout}>Sign out</MenuItem>
      </MenuList>
    </Menu>
  );
};
