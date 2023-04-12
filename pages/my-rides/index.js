import React from "react";
import Heading from "../../components/Heading/Heading.styled";
import SecondHeadingSticky from "../../components/SecondHeading/SecondHeading.styled";
import {
  StyledCardForDetailPage,
  StyledDateAndTime,
  StyledDescriptionTerm,
  StyledDescriptionDetails,
  StyledSpanForDetailPageTwo,
  StyledSpanForDetailPage,
  StyledDriverInformationCardForMyRidesPage,
  StyledPaymentInformation,
  StyledPaymentInformationAlert,
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
      <SecondHeadingSticky>Meine Fahrten</SecondHeadingSticky>
      <SecondHeadingSticky>Anstehend:</SecondHeadingSticky>

      <ul role="list">
        {bookedRides.map((ride) => (
          <li key={ride.id}>
            <StyledCardForDetailPage>
              <StyledDateAndTime>
                {ride.date}, {ride.time}
              </StyledDateAndTime>
              <StyledDriverInformationCardForMyRidesPage>
                <Image
                  src={"/images/charlesdeluvio-K4mSJ7kc0As-unsplash.jpg"}
                  alt="profile pic"
                  width={100}
                  height={100}
                />
                <StyledSpanForDetailPage>{ride.driver}</StyledSpanForDetailPage>
                <StyledSpanForDetailPageTwo>
                  {ride.car}
                </StyledSpanForDetailPageTwo>
              </StyledDriverInformationCardForMyRidesPage>
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
                <StyledPaymentInformationAlert>
                  Achtung!
                </StyledPaymentInformationAlert>
                <StyledPaymentInformation>
                  Bitte passend und in bar zahlen!
                </StyledPaymentInformation>
              </dl>
            </StyledCardForDetailPage>
          </li>
        ))}
      </ul>
      <StyledLinkWrapper>
        <StyledLink href={`/`}>Zurück zu allen Fahrten</StyledLink>
      </StyledLinkWrapper>
    </main>
  );
}
