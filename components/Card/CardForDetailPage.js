import { rides } from "../../lib/rides";

const choosenRide = {
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
};

export default function ChoosenRideComponent({ choosenRide }) {
  const extractedRide = rides.find((obj) => obj.id === choosenRide.id);
}
