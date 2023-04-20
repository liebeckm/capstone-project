import Heading from "../../components/Heading/Heading.styled";
import React, { useState } from "react";
import SecondHeading from "../../components/SecondHeading/SecondHeading.styled";
import List from "../../components/List/List";
import { initalRides } from "../../lib/rides";
import RideSearchForm from "../../components/Form/RideSearchForm.styled";

export default function Home() {
  const [rides, setRides] = useState(initalRides);
  const [filteredRides, setFilteredRides] = useState([]);
  const [isSearchFormVisible, setIsSearchFormVisible] = useState(true);

  const handleSearch = (formData) => {
    const filteredRides = initalRides.filter(
      (ride) =>
        ride.departure.toLowerCase() === formData.departure.toLowerCase() &&
        ride.destination.toLowerCase() === formData.destination.toLowerCase() &&
        ride.date === formData.date &&
        ride.time === formData.time &&
        ride.seats >= formData.seats
    );
    setFilteredRides(filteredRides);
    setIsSearchFormVisible(false);
  };

  const handleReset = () => {
    setFilteredRides([]);
    setIsSearchFormVisible(true);
  };

  return (
    <main>
      <Heading>landwaerts</Heading>
      <SecondHeading $sticky>
        {isSearchFormVisible ? "Wohin soll es gehen?" : "Suchergebnisse"}
      </SecondHeading>
      {isSearchFormVisible ? (
        <RideSearchForm onSearch={handleSearch} />
      ) : (
        <button onClick={handleReset}>Zurück zur Gesamtliste</button>
      )}
      <List rides={filteredRides.length > 0 ? filteredRides : rides} />
    </main>
  );
}
