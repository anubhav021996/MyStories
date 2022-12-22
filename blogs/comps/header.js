import Link from "next/link";
import style from "../styles/comps.module.css";
import { SearchIcon, EditIcon } from "@chakra-ui/icons";
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
      backgroundColor="black"
      color="white"
    >
      <Stack direction="row" align="center" gap="50">
        <Heading>MyStories</Heading>
        <Input
          type="text"
          width="500px"
          placeholder="Search Your Favorite Stories..."
          className={style.SearchBox}
        />
      </Stack>
      <UnorderedList
        color="white"
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
            <EditIcon />
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
