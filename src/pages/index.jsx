import Head from "next/head";
import { Box, Typography } from "@mui/material";
import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

const styles = {
  root: {
    height: "100vh",
    backgroundColor: "#32323e",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "100vh",
    padding: "14px 0",
  },
  title: {
    fontSize: "3.8rem",
    fontWeight: 700,
    lineHeight: "1.2",
    color: "#fff",
    maxWidth: 900,
  },
  mainText: {
    backgroundColor: "#2AA5A0",
    backgroundImage: "linear-gradient(90deg,#00aff5,#9a6afa)",
    backgroundClip: "text",
    textFillColor: "transparent",
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>COL - сравненивайте цены в разных странах мира</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={styles.root} variant="main">
        <Typography sx={styles.title} variant="h1">
          <Typography sx={styles.mainText} variant="span">
            Просто и удобно
          </Typography>{" "}
          <br />
          сравненивайте цены в разных странах мира
        </Typography>
      </Box>
    </>
  );
}