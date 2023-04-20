import React, { useState } from "react";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledAddButton,
} from "./RideAddForm.styled";

export default function RideSearchForm(props) {
  console.log("Props:", props.setFilteredRides);
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [seats, setSeats] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    const filteredRides =
      props.rides &&
      props.rides.filter((ride) => {
        return (
          ride.departure.toLowerCase().includes(departure.toLowerCase()) &&
          ride.destination.toLowerCase().includes(destination.toLowerCase()) &&
          ride.date === date &&
          ride.time === time &&
          ride.seats >= seats
        );
      });
    props.onSearch(filteredRides);
  }

  return (
    <StyledForm onSubmit={handleSearch}>
      <StyledLabel htmlFor="departure">Von:</StyledLabel>
      <StyledInput
        type="text"
        id="departure"
        value={departure}
        onChange={(e) => setDeparture(e.target.value)}
        required
      />

      <StyledLabel htmlFor="destination">Nach:</StyledLabel>
      <StyledInput
        type="text"
        id="destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        required
      />

      <StyledLabel htmlFor="date">Datum:</StyledLabel>
      <StyledInput
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <StyledLabel htmlFor="time">Uhrzeit:</StyledLabel>
      <StyledInput
        type="time"
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <StyledLabel htmlFor="seats">Sitzplätze:</StyledLabel>
      <StyledInput
        type="number"
        id="seats"
        value={seats}
        onChange={(e) => setSeats(e.target.value)}
      />

      <StyledAddButton type="submit">Search</StyledAddButton>
    </StyledForm>
  );
}
