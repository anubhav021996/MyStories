import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Blog from "../comps/blogCard";
import axios from "axios";
import { useEffect, useState } from "react";

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
    return <h1>...Loading</h1>;
  }
  return (
    <div className={styles.main}>
      <h2>Top Stories of the day</h2>
      {data.map((e, i) => (
        <Blog data={e} key={i} />
      ))}
    </div>
  );
}
