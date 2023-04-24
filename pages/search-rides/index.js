import Heading from "../../components/Heading/Heading.styled";
import React, { useState } from "react";
import SecondHeading from "../../components/SecondHeading/SecondHeading.styled";
import List from "../../components/List/List";
import { initalRides } from "../../lib/rides";
import RideSearchForm from "../../components/Form/RideSearchForm.styled";
import { BookingButton } from "../../components/Button/BookingButton.styled";

export default function Home() {
  const [rides, setRides] = useState(initalRides);
  const [filteredRides, setFilteredRides] = useState([]);
  const [isSearchFormVisible, setIsSearchFormVisible] = useState(true);

  const handleSearch = (formData) => {
    const filteredRides = initalRides.filter(
      (ride) =>
        ride.departure === formData.departure &&
        ride.destination === formData.destination
    );
    setFilteredRides(filteredRides);
    setIsSearchFormVisible(false);
    setRides(rides);
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
        <BookingButton onClick={handleReset}>
          Zurück zur Gesamtliste
        </BookingButton>
      )}
      <List rides={filteredRides.length > 0 ? filteredRides : rides} />
    </main>
  );
}
