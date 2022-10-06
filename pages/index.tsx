import type { NextPage } from "next";
import Head from "next/head";
import { Typography } from "@mui/material";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Template</title>
        <meta name="description" content="Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography variant="h3">Template</Typography>
    </>
  );
};

export default Home;
