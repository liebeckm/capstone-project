import React, { useState } from "react";

import styled from "styled-components";

const RideAddForm = ({ onAdd }) => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [meetingpoint, setMeetingpoint] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [seats, setSeats] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ departure, destination, meetingpoint, date, time, seats, price });
    setDeparture("");
    setDestination("");
    setMeetingpoint("");
    setDate("");
    setTime("");
    setSeats("");
    setPrice("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <StyledLabel htmlFor="departure">Von:</StyledLabel>
        <StyledInput
          type="text"
          id="departure"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
          required
        />
      </div>
      <div>
        <StyledLabel htmlFor="meetingpoint">Treffpunkt:</StyledLabel>
        <StyledInput
          type="text"
          id="meetingpoint"
          value={meetingpoint}
          onChange={(e) => setMeetingpoint(e.target.value)}
          required
        />
      </div>
      <div>
        <StyledLabel htmlFor="destination">Nach:</StyledLabel>
        <StyledInput
          type="text"
          id="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
      </div>
      <div>
        <StyledLabel htmlFor="date">Datum:</StyledLabel>
        <StyledInput
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <StyledLabel htmlFor="time">Uhrzeit:</StyledLabel>
        <StyledInput
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <div>
        <StyledLabel htmlFor="seats">Sitzplätze:</StyledLabel>
        <StyledInput
          type="number"
          id="seats"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
          required
        />
      </div>
      <div>
        <StyledLabel htmlFor="price">Preis in €:</StyledLabel>
        <StyledInput
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <StyledAddButton type="submit">Veröffentlichen</StyledAddButton>
    </StyledForm>
  );
};
export default RideAddForm;

export const StyledForm = styled.form`
  background-color: var(--yellow);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  margin: 0.25rem;
  margin-bottom: 6.5rem;
  padding: 0.5rem;
  border-radius: 1.5rem;
`;

export const StyledLabel = styled.label`
  font-size: 1.2rem;
`;

export const StyledInput = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 1.5rem;
  width: 90%;
`;

export const StyledAddButton = styled.button`
  color: var(--white);
  background-color: var(--green);
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
`;
