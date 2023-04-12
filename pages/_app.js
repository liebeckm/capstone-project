import GlobalStyle from "../styles";
import Head from "next/head";
import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";

export default function App({ Component, pageProps }) {
  const [bookedRides, setBookedRides] = useState([]);
  console.log(bookedRides);

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component
        {...pageProps}
        bookedRides={bookedRides}
        setBookedRides={setBookedRides}
      />
      <NavBar />
    </>
  );
}
