import React from "react";
import { useState, useEffect } from "react";
import RideAddForm from "../../components/Form/RideAddForm.styled";
import Heading from "../../components/Heading/Heading.styled";
import SecondHeading from "../../components/SecondHeading/SecondHeading.styled";
import {
  StyledPaymentInformation,
  StyledReloadMessage,
} from "../../components/Card/Card.styled";
import { uid } from "uid";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("de-DE", options);
  const [dateStringFormatted] = formattedDate.split(", ");
  return `${dateStringFormatted}`;
};

const RideAddPage = ({ onAddRide }) => {
  const [isRideAdded, setIsRideAdded] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleAddRide = (ride) => {
    const id = uid();
    const newRide = {
      ...ride,
      id,
      slug: `ride-${id}`,
      currency: "€",
      meetingpoint: ride.meetingpoint,
      date: formatDate(ride.date),
      time: ride.time + "Uhr",
      isMyRide: true,
    };
    onAddRide(newRide);
    setIsRideAdded(true);
    setIsFormSubmitted(true);
  };

  useEffect(() => {
    if (isFormSubmitted) {
      setTimeout(() => {
        setIsRideAdded(false);
        setIsFormSubmitted(false);
      }, 3000);
    }
  }, [isFormSubmitted]);

  return (
    <div>
      <Heading>landwaerts</Heading>
      <SecondHeading>Meine Fahrten</SecondHeading>
      {isRideAdded ? (
        <>
          <StyledPaymentInformation>
            Deine Fahrt wurde erfolgreich hinzugefügt!
          </StyledPaymentInformation>
          <StyledReloadMessage>
            Die Seite wird neu geladen...
          </StyledReloadMessage>
        </>
      ) : (
        <div></div>
      )}
      {!isFormSubmitted && <RideAddForm onAdd={handleAddRide} />}
    </div>
  );
};

export default RideAddPage;
