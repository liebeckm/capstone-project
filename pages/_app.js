import GlobalStyle from "../styles";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";
import NavBar from "../components/NavBar/NavBar";
import { initalRides } from "../lib/rides";

export default function App({ Component, pageProps }) {
  const [rides, setRides] = useLocalStorageState("rides", {
    defaultValue: initalRides,
  });
  const [bookedRides, setBookedRides] = useLocalStorageState("bookedRides", {
    defaultValue: [],
  });

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
