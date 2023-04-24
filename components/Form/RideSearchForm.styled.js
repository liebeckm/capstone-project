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
    props.onSearch({ departure, destination, date, time, seats });
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

      <StyledAddButton type="submit">Fahrt suchen</StyledAddButton>
    </StyledForm>
  );
}
