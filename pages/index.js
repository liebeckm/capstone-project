import Heading from "../components/Heading/Heading.styled";
import { rides } from "../lib/rides";
import React from "react";
import SecondHeading from "../components/SecondHeading/SecondHeading.styled";
import List from "../components/List/List";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Heading>landwaerts</Heading>
      <SecondHeading $sticky>Übersicht – Alle Fahrten</SecondHeading>
      <List rides={rides} />
      <ul>
        {rides.map((rides) => (
          <li key={rides.id}></li>
        ))}
      </ul>
    </main>
  );
}
