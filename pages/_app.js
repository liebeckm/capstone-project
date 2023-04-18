import GlobalStyle from "../styles";
import Head from "next/head";
import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import { initalRides } from "../lib/rides";

export default function App({ Component, pageProps }) {
  const [rides, setRides] = useState(initalRides);
  const [bookedRides, setBookedRides] = useState([]);
  console.log("Rides in der App.js:", rides);
  const handleAddRide = (newRide) => {
    setRides([...rides, newRide]);
  };
  const handleAddBookedRide = (newRide) => {
    setBookedRides([...bookedRides, newRide]);
  };

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component
        {...pageProps}
        rides={rides}
        bookedRides={bookedRides}
        onAddRide={handleAddRide}
        onAddBookedRide={handleAddBookedRide}
      />
      <NavBar />
    </>
  );
}
