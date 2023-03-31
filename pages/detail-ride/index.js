import Heading from "../../components/Heading/Heading.styled";
import SecondHeading from "../../components/SecondHeading/SecondHeading.styled";
import ChoosenRideComponent from "../../components/Card/CardForDetailPage";
import { StyledCard } from "../../components/Card/Card.styled";
export default function DetailPage() {
  return (
    <main>
      <Heading>landwaerts</Heading>
      <SecondHeading>Ausgewählte Fahrt</SecondHeading>
      <StyledCard>
        <ChoosenRideComponent
          choosenRide={{
            id: "1",
            driver: "John Doe",
            rating: "⭐️⭐️⭐️⭐️⭐️",
            date: "28.05.2023",
            time: "16:00 Uhr",
            departure: "Melsungen",
            destination: "Kassel",
            seats: 1,
            price: 4,
            currency: "€",
          }}
        />
      </StyledCard>
      <a href="http://localhost:3000/">back to main</a>
    </main>
  );
}
