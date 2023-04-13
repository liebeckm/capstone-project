import Heading from "../../../components/Heading/Heading.styled";
import { rides } from "../../../lib/rides";
import {
  StyledCard,
  StyledDescriptionTerm,
  StyledDescriptionDetails,
  StyledRideInformation,
  StyledSpan,
  StyledDriverInformation,
  StyledSpanForDetailPage,
  StyledPaymentInformation,
} from "../../../components/Card/Card.styled";

import Image from "next/image";
import { useRouter } from "next/router";
import {
  StyledLink,
  StyledLinkWrapper,
} from "../../../components/Link/Link.styled";
import SecondHeading from "../../../components/SecondHeading/SecondHeading.styled";

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
      <StyledDriverInformation $primary>
        <StyledSpan>
          <Image
            src={"/images/charlesdeluvio-K4mSJ7kc0As-unsplash.jpg"}
            alt="profile pic"
            width={100}
            height={100}
          />
        </StyledSpan>
        <StyledSpanForDetailPage $marginbottom>
          {driver}
        </StyledSpanForDetailPage>
        <StyledSpanForDetailPage>{car}</StyledSpanForDetailPage>
      </StyledDriverInformation>
      <StyledCard>
        <section>
          <StyledRideInformation>
            Bitte kontaktiere {driver}.
          </StyledRideInformation>
          <dl>
            <StyledDescriptionTerm>Kontakt:</StyledDescriptionTerm>
            <StyledDescriptionDetails>{contact}</StyledDescriptionDetails>
          </dl>
          <StyledRideInformation $font>Deine Fahrt:</StyledRideInformation>
          <StyledRideInformation $font>
            {date}, {time}
          </StyledRideInformation>
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
          <StyledPaymentInformation $marginbottom>
            Achtung!
          </StyledPaymentInformation>
          <StyledPaymentInformation>
            Bitte passend und in bar zahlen!
          </StyledPaymentInformation>
        </section>
      </StyledCard>
      <div>
        <StyledLinkWrapper>
          <StyledLink href={`/`}>Zurück zu allen Fahrten</StyledLink>
        </StyledLinkWrapper>
      </div>
    </main>
  );
}
