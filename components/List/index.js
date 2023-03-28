import { StyledCard } from "../Card/Card.styled";
import Image from "next/image";

export default function List({ rides }) {
  return (
    <ul>
      {rides.map((ride) => (
        <StyledCard key={ride.id}>
          <p>
            {ride.driver}
            <br />
            <br />
            <Image
              src={"/images/charlesdeluvio-K4mSJ7kc0As-unsplash.jpg"}
              alt="profile pic"
              width={100}
              height={100}
            />
            <br />
            <br />
            {ride.rating}
          </p>
          <p>
            {ride.date}, {ride.time}
            <br />
            <br />
            Von: {ride.departure}
            <br />
            Nach: {ride.destination}
            <br />
            Verfügbare Sitzplätze: {ride.seats}
            <br />
            <br />
            Preis: {ride.price}
            {ride.currency}
          </p>
        </StyledCard>
      ))}
    </ul>
  );
}
