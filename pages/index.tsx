import type { NextPage } from "next";
import Head from "next/head";
import GradesTable from "../src/components/GradesTable";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Template</title>
        <meta name="description" content="Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GradesTable />
    </>
  );
};

export default Home;
