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
import { useState } from "react";
import SearchResults from "./searchResults";

const Header = ({ token, setToken, setSearchData }) => {
  const [search, setSearch] = useState();
  const [data, setData] = useState([]);
  const handleSearch = async () => {
    let res = await fetch(`/api/blog?q=${search}`);
    let resData = await res.json();
    console.log("data", resData);
    // setData([...resData]);
    setSearchData([...resData]);
  };
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
        <Link href="/">
          <Heading>MyStories</Heading>
        </Link>
        <Input
          type="text"
          value={search}
          width="500px"
          placeholder="Search Your Favorite Stories..."
          className={style.SearchBox}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => {
            if (e.key == "Enter") handleSearch();
          }}
        />
        {/* {data.length > 0 && <SearchResults data={data} />} */}
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
        {token && (
          <ListItem>
            <Link href="/write" className={style.Link}>
              Write
              <EditIcon />
            </Link>
          </ListItem>
        )}
        <ListItem>
          <Link href="/notifications" className={style.Link}>
            🔔
          </Link>
        </ListItem>
        <ListItem color="white">
          {token ? (
            <AccountMenu setToken={setToken} />
          ) : (
            <Link href="/login" className={style.Link} color="white">
              Login
            </Link>
          )}
        </ListItem>
        <ListItem sx={{ visibility: "hidden" }}>
          <HamburgerIcon />
        </ListItem>
      </UnorderedList>
    </Stack>
  );
};

export default Header;
