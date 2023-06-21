import type { NextPage } from "next";
import Head from "next/head";
import GradesTable from "../src/components/GradesTable";
import { Row } from "../src/types";
import { Box, Container, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import RowForm from "../src/components/RowForm";

const Home: NextPage = () => {
  const [rows, setRows] = useState<Row[]>([]);

  const addRow = useCallback((row: Row) => {
    setRows((prevRows) => [...prevRows, row]);
  }, []);

  return (
    <>
      <Head>
        <title>Mediana das Medianas</title>
        <meta name="description" content="Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="lg">
        <Typography variant="h2" align="center" mt={10}>
          Mediana das Medianas
        </Typography>

        <Box my={10}>
          <RowForm addRow={addRow} />
        </Box>

        <GradesTable rows={rows} />
      </Container>
    </>
  );
};

export default Home;
