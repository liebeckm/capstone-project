import Heading from "../../components/Heading/Heading.styled";
import SecondHeadingSticky from "../../components/SecondHeading/SecondHeading.styled";
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

export default function DetailPage({ bookedRides, setBookedRides }) {
  const router = useRouter();
  const { slug } = router.query;
  const extractedRide = rides.find((ride) => ride.slug === slug);

  const handleBookRide = (event) => {
    event.preventDefault();
    setBookedRides([...bookedRides, extractedRide]);
    router.push("/my-rides");
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
      <SecondHeadingSticky>Ausgewählte Fahrt</SecondHeadingSticky>
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
          <StyledLink
            href={`./booking-confirmation/${slug}`}
            onClick={(event) => {
              handleBookRide(event);
            }}
          >
            Buchen
          </StyledLink>
        </StyledLinkWrapper>
      </div>
    </main>
  );
}
