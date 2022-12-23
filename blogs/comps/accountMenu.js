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
        color="white"
        textDecoration="none"
      >
        Account
      </MenuButton>
      <MenuList backgroundColor="gray">
        <Link href="/write">
          <MenuItem backgroundColor="gray">Write a story</MenuItem>
        </Link>
        <Link href="/">
          <MenuItem backgroundColor="gray">Stories</MenuItem>
        </Link>
        <MenuDivider />
        <MenuItem onClick={logout} backgroundColor="gray">
          Sign out
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
