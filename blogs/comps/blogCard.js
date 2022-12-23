import {
  ListItem,
  UnorderedList,
  Stack,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import style from "../styles/comps.module.css";

const Blog = ({ data }) => {
  let today = data.date;
  return (
    <Stack className={style.Blog} padding="0 10px" justify="space-between">
      <UnorderedList>
        <ListItem fontWeight="medium">{data.userId.name}</ListItem>
        <ListItem>{data.date.slice(0, 10)}</ListItem>
      </UnorderedList>
      <Heading as="h6" size="md">
        {data.title}
      </Heading>
      <Stack direction="row" justify="space-between">
        <Text>{data.desc.slice(0, 180)}...</Text>
        <Image
          src={data.image}
          alt="broken img"
          h="150"
          w="150"
          border="1px solid black"
        />
      </Stack>
      <UnorderedList>
        <ListItem backgroundColor="gray.200" padding="3px" borderRadius="10px">
          {data.topic}
        </ListItem>
        <ListItem>{Math.round(Math.random() * 5 + 1)} min read</ListItem>
        <ListItem listStyleType="circle">Popular on MyStories</ListItem>
      </UnorderedList>
    </Stack>
  );
};

export default Blog;
