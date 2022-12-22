import Link from "next/link";
import style from "../styles/comps.module.css";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Stack,
  Heading,
  Input,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { AccountMenu } from "./accountMenu";

const Header = ({token, setToken}) => {
  return (
    <Stack
      direction="row"
      justify="space-between"
      border="1px solid"
      borderColor="black"
      top="0"
      padding="0 10px"
      position="sticky"
    >
      <Stack direction="row" align="center">
        <Heading>MyStories</Heading>
        <Input
          type="text"
          placeholder="Search Your Favorite Stories"
          className={style.SearchBox}
        />
      </Stack>
      <UnorderedList
        sx={{
          display: "flex",
          listStyleType: "none",
          gap: "10px",
          fontSize: "25px",
          alignItems: "center",
          fontWeight: "bold",
        }}
      >
        {/* <ListItem>
          <Link href="/write" className={style.Link}>
            Write
          </Link>
        </ListItem> */}
        <ListItem>
          <Link href="/notifications" className={style.Link}>
            🔔
          </Link>
        </ListItem>
        <ListItem>
          {token ? <AccountMenu setToken={setToken} /> :
          <Link href="/login" className={style.Link}>
            Login
          </Link>}
        </ListItem>
        <ListItem sx={{ visibility: "hidden" }}>
          <HamburgerIcon />
        </ListItem>
      </UnorderedList>
    </Stack>
  );
};

export default Header;
