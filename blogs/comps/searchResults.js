import { Stack, Box } from "@chakra-ui/react";
import Link from "next/link";

const SearchResults = ({ data, clearSearch }) => {
  return (
    <Stack
      position="absolute"
      zIndex="4"
      top="47px"
      left="235px"
      backgroundColor="white"
      direction="column"
      color="black"
      width="500px"
      gap="10px"
    >
      {data.map((e) => (
        <Box border="1px solid black" padding="5px 10px">
          <Link href={"/blogs/" + e._id} onClick={clearSearch}>
            {e.title}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

export default SearchResults;
