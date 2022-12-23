import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Blog from "../comps/blogCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Stack, Heading, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import SearchResults from "../comps/searchResults";

export const getStaticProps = async () => {
  let res = await fetch(`${process.env.BASE_FETCH_URL}/api/blog`);
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
  }, [data.length]);
  if (loading) {
    return (
      <Spinner
        margin="200px 48%"
        align="center"
        thickness="8px"
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
        <Link href={"/blogs/" + e._id} key={i}>
          <Blog data={e} />
        </Link>
      ))}
    </Stack>
  );
}
