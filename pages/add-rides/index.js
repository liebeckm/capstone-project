import React, { useState } from "react";
import RideAddForm from "../../components/Form/RideAddForm.styled";
import { rides } from "../../lib/rides";
import Heading from "../../components/Heading/Heading.styled";
import SecondHeading from "../../components/SecondHeading/SecondHeading.styled";
import { StyledPaymentInformation } from "../../components/Card/Card.styled";

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

const RideAddPage = () => {
  const [isRideAdded, setIsRideAdded] = useState(false);
  const handleAddRide = (ride) => {
    const newRide = {
      ...ride,
      slug: `ride-${rides.length + 1}`,
      currency: "€",
      meetingpoint: "",
      date: formatDate(ride.date),
      time: ride.time + "Uhr",
    };
    rides.push(newRide);
    setIsRideAdded(true);
  };

  return (
    <div>
      <Heading>landwaerts</Heading>
      <SecondHeading>Meine Fahrten</SecondHeading>
      {isRideAdded ? (
        <StyledPaymentInformation>
          Deine Fahrt wurde erfolgreich hinzugefügt!
        </StyledPaymentInformation>
      ) : (
        <div></div>
      )}
      <RideAddForm onAdd={handleAddRide} />
    </div>
  );
};

export default RideAddPage;
