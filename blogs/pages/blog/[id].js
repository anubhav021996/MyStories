import { Box } from "@chakra-ui/react";
export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/comment");
  const data = await res.json();

  const paths = data.map((el) => {
    return {
      params: { id: el.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`http://localhost:3000/api/comment?id=${id}`);
  const data = res.json();
  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return <Box>{ninja}</Box>;
};

export default Details;
