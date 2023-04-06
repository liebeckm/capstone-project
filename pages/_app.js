import GlobalStyle from "../styles";
import Head from "next/head";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [bookedRides, setBookedRides] = useState([]);
  bookedRides = { bookedRides };
  setBookedRides = { setBookedRides };

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
