import {
  Text,
  Stack,
  Heading,
  Image,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import axios from "axios";

export const getStaticPaths = async () => {
  let res = await fetch("http://localhost:3000/api/blog");
  let data = await res.json();

  const paths = data.map((blog) => {
    return {
      params: { id: blog._id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  //   console.log(id);
  let res = await fetch(`http://localhost:3000/api/blog?id=${id}`);
  let data = await res.json();
  //   console.log(data);
  return { props: { data } };
};

const Blog = ({ data }) => {
  return (
    <Stack direction="column" align="center" margin="50px">
      <UnorderedList listStyleType="none">
        <ListItem fontWeight="medium">Author : {data.name}</ListItem>
        <ListItem>{data.date.slice(0, 10)}</ListItem>
        <ListItem>{Math.round(Math.random() * 5 + 1)} min read</ListItem>
      </UnorderedList>
      <Heading>{data.title}</Heading>
      <Image
        src={data.image}
        alt="broken image"
        h="400px"
        border="1px solid"
        borderColor="black"
      />
      <Heading as="h6" size="md">
        {data.topic}
      </Heading>
      <Text>{data.desc}</Text>
    </Stack>
  );
};

export default Blog;
