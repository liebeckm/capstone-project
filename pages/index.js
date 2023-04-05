import Heading from "../components/Heading/Heading.styled";
import { rides } from "../lib/rides";
import React from "react";
import SecondHeadingSticky from "../components/SecondHeading/SecondHeading.styled";
import List from "../components/List/List";

export default function Home() {
  return (
    <main>
      <Heading>landwaerts</Heading>
      <SecondHeadingSticky>Übersicht – Alle Fahrten</SecondHeadingSticky>
      <List rides={rides} />
      <ul>
        {rides.map((rides) => (
          <li key={rides.id}></li>
        ))}
      </ul>
    </main>
  );
}
