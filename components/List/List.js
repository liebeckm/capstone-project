import {
  StyledSpan,
  StyledDescriptionTerm,
  StyledCard,
  StyledDescriptionDetails,
  StyledRideInformation,
} from "../Card/Card.styled";
import { StyledLink } from "../Link/Link.styled";
import Image from "next/image";

export default function List({ rides }) {
  return (
    <ul role="list">
      {rides.map((ride) => (
        <li key={ride.slug}>
          <StyledCard $gridfont>
            <section>
              <StyledSpan>{ride.driver}</StyledSpan>
              <StyledSpan>
                <Image
                  src={"/images/charlesdeluvio-K4mSJ7kc0As-unsplash.jpg"}
                  alt="profile pic"
                  width={100}
                  height={100}
                />
              </StyledSpan>
              <StyledSpan>{ride.rating}</StyledSpan>
            </section>
            <section>
              <StyledRideInformation $font>
                {ride.date}, {ride.time}
              </StyledRideInformation>
              <dl>
                <StyledDescriptionTerm>Von:</StyledDescriptionTerm>
                <StyledDescriptionDetails>
                  {ride.departure}
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
              </dl>
            </section>
            <section>
              {" "}
              <StyledLink href={`./detail-ride/${ride.slug}`}>
                Auswählen
              </StyledLink>
            </section>
          </StyledCard>
        </li>
      ))}
    </ul>
  );
}
