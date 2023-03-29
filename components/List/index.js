import { StyledCard } from "../Card/Card.styled";
import { StyledSpan } from "../Card/Card.styled";
import Image from "next/image";

export default function List({ rides }) {
  return (
    <ul>
      {rides.map((ride) => (
        <StyledCard key={ride.id}>
          <p>
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
          </p>
          <p>
            <StyledSpan>
              {ride.date}, {ride.time}
            </StyledSpan>
            Von: {ride.departure}
            <StyledSpan>Nach: {ride.destination}</StyledSpan>
            <StyledSpan>Verfügbare Sitzplätze: {ride.seats}</StyledSpan>
            <StyledSpan>
              Preis: {ride.price}
              {ride.currency}
            </StyledSpan>
          </p>
        </StyledCard>
      ))}
    </ul>
  );
}
