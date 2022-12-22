import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Blog from "../comps/blogCard";
// import axios from "axios";
import { useEffect, useState } from "react";
import { Stack, Heading, Spinner } from "@chakra-ui/react";

export const getStaticProps = async () => {
  let res = await fetch("http://localhost:3000/api/blog");
  let data = await res.json();
  return {
    props: { data: data },
  };
};

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (data.length > 0) {
      setLoading(false);
    }
  }, []);
  if (loading) {
    return (
      <Spinner
        display="flex"
        align="center"
        justify="center"
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  }
  return (
    <Stack direction="column" gap="10" align="center">
      <Heading>Top Stories of the day</Heading>
      {data.map((e, i) => (
        <Blog data={e} key={i} />
      ))}
    </Stack>
  );
}
