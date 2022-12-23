import {
  Text,
  Stack,
  Heading,
  Image,
  UnorderedList,
  ListItem,
  Input,
  Textarea,
  Button,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export const getStaticPaths = async () => {
  let res = await fetch(`${process.env.BASE_FETCH_URL}/api/blog`);
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
  let res = await fetch(`${process.env.BASE_FETCH_URL}/api/blog?id=${id}`);
  let data = await res.json();
  //   console.log(data);
  return { props: { data } };
};

const Blog = ({ data }) => {
  const [value, setValue] = useState();
  const [valueList, setValuelist] = useState([]);

  const handleClick = (e) => {
    if (value !== "" && valueList !== "") {
      setValuelist([...valueList, value]);
    }
  };

  return (
    <>
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
      <Box>
        <Text ml={60} fontSize="20px" mb={5}>
          Comment here
        </Text>
        <Textarea
          w="70%"
          m="auto"
          display="block"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></Textarea>
        <Button ml="81%" mt={2} onClick={handleClick}>
          Post
        </Button>
      </Box>
      <Box textAlign="center" width="max-content" ml={60} fontSize="2 0px">
        <ol>
          {valueList.map((el) => {
            return <li>{el}</li>;
          })}
        </ol>
      </Box>
    </>
  );
};

export default Blog;
