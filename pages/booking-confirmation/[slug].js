import Heading from "../../components/Heading/Heading.styled";
import SecondHeading from "../../components/SecondHeading/SecondHeading.styled";
import { rides } from "../../lib/rides";
import {
  StyledCardForDetailPage,
  StyledDescriptionTerm,
  StyledDescriptionDetails,
  StyledDateAndTime,
  StyledSpan,
  StyledPreCardForDetailPage,
  StyledSpanForDetailPage,
  StyledSpanForDetailPageTwo,
} from "../../components/Card/Card.styled";

import Image from "next/image";
import { useRouter } from "next/router";
import {
  StyledLink,
  StyledLinkWrapper,
} from "../../components/Link/Link.styled";

export default function Bookingconfirmation() {
  const router = useRouter();
  const { slug } = router.query;
  const extractedRide = rides.find((ride) => ride.slug === slug);

  if (!extractedRide) {
    return null;
  }

  const {
    driver,
    car,
    date,
    time,
    departure,
    meetingpoint,
    destination,
    seats,
    price,
    currency,
    contact,
  } = extractedRide;

  return (
    <main>
      <Heading>landwaerts</Heading>
      <SecondHeading>Fahrt gebucht!</SecondHeading>
      <StyledPreCardForDetailPage>
        <StyledSpan>
          <Image
            src={"/images/charlesdeluvio-K4mSJ7kc0As-unsplash.jpg"}
            alt="profile pic"
            width={100}
            height={100}
          />
        </StyledSpan>
        <StyledSpanForDetailPage>{driver}</StyledSpanForDetailPage>
        <StyledSpanForDetailPageTwo>{car}</StyledSpanForDetailPageTwo>
      </StyledPreCardForDetailPage>
      <StyledCardForDetailPage>
        <section>
          <StyledDescriptionTerm>
            Bitte kontaktiere {driver}
          </StyledDescriptionTerm>
          <section>
            <StyledDescriptionTerm>Kontakt:</StyledDescriptionTerm>
            <StyledDescriptionDetails>{contact}</StyledDescriptionDetails>
          </section>
          <StyledDateAndTime>
            {date}, {time}
          </StyledDateAndTime>
          <dl>
            <StyledDescriptionTerm>Von:</StyledDescriptionTerm>
            <StyledDescriptionDetails>{departure}</StyledDescriptionDetails>
            <StyledDescriptionTerm>Treffpunkt:</StyledDescriptionTerm>
            <StyledDescriptionDetails>{meetingpoint}</StyledDescriptionDetails>
            <StyledDescriptionTerm>Nach:</StyledDescriptionTerm>
            <StyledDescriptionDetails>{destination}</StyledDescriptionDetails>
            <StyledDescriptionTerm>
              Verfügbare Sitzplätze:
            </StyledDescriptionTerm>
            <StyledDescriptionDetails>{seats}</StyledDescriptionDetails>
            <StyledDescriptionTerm>Preis:</StyledDescriptionTerm>
            <StyledDescriptionDetails>
              {price}
              {currency}
            </StyledDescriptionDetails>
          </dl>
        </section>
      </StyledCardForDetailPage>
      <div>
        <StyledLinkWrapper>
          <StyledLink href={`/`}>Zurück zu allen Fahrten</StyledLink>
        </StyledLinkWrapper>
      </div>
    </main>
  );
}
