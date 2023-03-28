import { rides } from "../../lib/rides";
import React from "react";
import { StyledCard } from "../../components/Card/Card.styled";
import Heading from "../../components/Heading";
import SecondHeading from "../../components/SecondHeading";
import Image from "next/image";
import List from "../../components/List";
export default function ListOfRides() {
  return (
    <div>
      <Heading>landwaerts</Heading>
      <SecondHeading>Übersicht – Alle Fahrten</SecondHeading>
      <List rides={rides} />
    </div>
  );
}
