import { rides } from "../../lib/rides";
import { useRouter } from "next/router";
import React from "react";
import { StyledCard } from "../../components/Card/Card.styled";
import Heading from "../../components/Heading";
import SecondHeading from "../../components/SecondHeading";
import Image from "next/image";

export default function ListOfRides() {
  const router = useRouter();

  return (
    <div>
      <Heading>landwaerts</Heading>
      <SecondHeading>Übersicht – Alle Fahrten</SecondHeading>
      {rides.map((ride) => (
        <StyledCard key={ride.date}>
          <p>
            {ride.driver}
            <br />
            <Image
              src={"/images/charlesdeluvio-K4mSJ7kc0As-unsplash.jpg"}
              alt="profile pic"
              width={100}
              height={100}
            />
            <br />
            {ride.rating}
          </p>
          <p>
            {ride.date}, {ride.time}
            <br />
            <br />
            Von: {ride.departure}
            <br />
            Nach: {ride.destination}
            <br />
            Verfügbare Sitzplätze: {ride.seats}
            <br />
            <br />
            Preis: {ride.price}
            {ride.currency}
          </p>
        </StyledCard>
      ))}
    </div>
  );
}
