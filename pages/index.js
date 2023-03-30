import Heading from "../components/Heading/Heading.styled";
import { rides } from "../lib/rides";
import React from "react";
import SecondHeading from "../components/SecondHeading/SecondHeading.styled";
import List from "../components/List/List";

export default function Home() {
  return (
    <main>
      <Heading>landwaerts</Heading>
      <SecondHeading>Übersicht – Alle Fahrten</SecondHeading>
      <List rides={rides} />
    </main>
  );
}
