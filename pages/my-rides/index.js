import React from "react";
import Heading from "../../components/Heading/Heading.styled";
import SecondHeading from "../../components/SecondHeading/SecondHeading.styled";
import {
  StyledCard,
  StyledRideInformation,
  StyledDescriptionTerm,
  StyledDescriptionDetails,
  StyledSpanForDetailPage,
  StyledDriverInformation,
  StyledPaymentInformation,
} from "../../components/Card/Card.styled";
import {
  StyledLink,
  StyledLinkWrapper,
} from "../../components/Link/Link.styled";
import Image from "next/image";

export default function BookedRidesPage({ bookedRides }) {
  if (!bookedRides) {
    return <p>Noch keine Fahrten gebucht</p>;
  }

  return (
    <main>
      <Heading>landwaerts</Heading>
      <SecondHeading>Meine Fahrten</SecondHeading>
      <SecondHeading $sticky>Anstehend:</SecondHeading>

      <ul role="list">
        {bookedRides.map((ride) => (
          <li key={ride.id}>
            <StyledCard>
              <StyledRideInformation $font>
                {ride.date}, {ride.time}
              </StyledRideInformation>
              <StyledDriverInformation>
                <Image
                  src={"/images/charlesdeluvio-K4mSJ7kc0As-unsplash.jpg"}
                  alt="profile pic"
                  width={100}
                  height={100}
                />
                <StyledSpanForDetailPage $marginbottom>
                  {ride.driver}
                </StyledSpanForDetailPage>
                <StyledSpanForDetailPage>{ride.car}</StyledSpanForDetailPage>
              </StyledDriverInformation>
              <dl>
                <StyledDescriptionTerm>Kontakt:</StyledDescriptionTerm>
                <StyledDescriptionDetails>
                  {ride.contact}
                </StyledDescriptionDetails>
                <StyledDescriptionTerm>Von:</StyledDescriptionTerm>
                <StyledDescriptionDetails>
                  {ride.departure}
                </StyledDescriptionDetails>
                <StyledDescriptionTerm>Treffpunkt:</StyledDescriptionTerm>
                <StyledDescriptionDetails>
                  {ride.meetingpoint}
                </StyledDescriptionDetails>
                <StyledDescriptionTerm>Nach:</StyledDescriptionTerm>
                <StyledDescriptionDetails>
                  {ride.destination}
                </StyledDescriptionDetails>
                <StyledDescriptionTerm>Sitzplätze:</StyledDescriptionTerm>
                <StyledDescriptionDetails>
                  {ride.seats}
                </StyledDescriptionDetails>
                <StyledDescriptionTerm>Preis:</StyledDescriptionTerm>
                <StyledDescriptionDetails>
                  {ride.price}
                  {ride.currency}
                </StyledDescriptionDetails>
                <StyledPaymentInformation $marginbottom>
                  Achtung!
                </StyledPaymentInformation>
                <StyledPaymentInformation>
                  Bitte passend und in bar zahlen!
                </StyledPaymentInformation>
              </dl>
            </StyledCard>
          </li>
        ))}
      </ul>
      <StyledLinkWrapper>
        <StyledLink href={`/`}>Zurück zu allen Fahrten</StyledLink>
      </StyledLinkWrapper>
    </main>
  );
}
