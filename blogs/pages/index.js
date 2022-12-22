import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Blog from "../comps/blogCard";
import axios from "axios";

export const getStaticProps = async () => {
  let res = await fetch("http://localhost:2345/data");
  let data = await res.json();
  console.log(data);
  return {
    props: { data: data },
  };
};

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <div className={styles.main}>
      <h2>Top Stories of the day</h2>
      {data.map((e) => (
        <Blog data={e} />
      ))}
    </div>
  );
}
