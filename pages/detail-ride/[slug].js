import Heading from "../../components/Heading/Heading.styled";
import SecondHeading from "../../components/SecondHeading/SecondHeading.styled";
import { rides } from "../../lib/rides";
import {
  StyledCard,
  StyledDescriptionTerm,
  StyledDescriptionDetails,
  StyledRideInformation,
  StyledSpan,
  StyledDriverInformation,
  StyledSpanForDetailPage,
} from "../../components/Card/Card.styled";

import Image from "next/image";
import { useRouter } from "next/router";

import {
  StyledLink,
  StyledLinkWrapper,
} from "../../components/Link/Link.styled";
import { BookingButton } from "../../components/Button/BookingButton.styled";

export default function DetailPage({ bookedRides, setBookedRides }) {
  const router = useRouter();
  const { slug } = router.query;
  const extractedRide = rides.find((ride) => ride.slug === slug);

  const handleBookRide = () => {
    setBookedRides([...bookedRides, extractedRide]);
    router.push(`./booking-confirmation/${slug}`);
  };

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
  } = extractedRide;

  return (
    <main>
      <Heading>landwaerts</Heading>
      <SecondHeading $sticky>Ausgewählte Fahrt</SecondHeading>
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
            <StyledDescriptionTerm>Sitzplätze:</StyledDescriptionTerm>
            <StyledDescriptionDetails>{seats}</StyledDescriptionDetails>
            <StyledDescriptionTerm>Preis:</StyledDescriptionTerm>
            <StyledDescriptionDetails>
              {price}
              {currency}
            </StyledDescriptionDetails>
          </dl>
        </section>
      </StyledCard>
      <div>
        <StyledLinkWrapper>
          <StyledLink href={`/`}>Zurück zu allen Fahrten</StyledLink>
          <BookingButton onClick={handleBookRide}>Buchen</BookingButton>
        </StyledLinkWrapper>
      </div>
    </main>
  );
}
