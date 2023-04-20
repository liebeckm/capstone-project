import Heading from "../components/Heading/Heading.styled";
import React from "react";
import SecondHeading from "../components/SecondHeading/SecondHeading.styled";
import List from "../components/List/List";
import { StyledLink } from "../components/Link/Link.styled";
export default function Home({ rides }) {
  return (
    <main>
      <Heading>landwaerts</Heading>
      <SecondHeading $sticky>Übersicht – Alle Fahrten</SecondHeading>
      <StyledLink href={`/search-rides`}>Fahrt suchen</StyledLink>
      <List rides={rides} />
      <ul>
        {rides.map((rides) => (
          <li key={rides.id}></li>
        ))}
      </ul>
    </main>
  );
}
