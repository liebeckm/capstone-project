import Heading from "../components/Heading";
import { rides } from "../lib/rides";
import React from "react";
import SecondHeading from "../components/SecondHeading";
import List from "../components/List";

export default function Home() {
  return (
    <main>
      <Heading>landwaerts</Heading>
      <SecondHeading>Übersicht – Alle Fahrten</SecondHeading>
      <List rides={rides} />
    </main>
  );
}