import { StyledLink } from "./Link.styled";
import { render, screen } from "@testing-library/react";

const testRides = [
  {
    id: "1",
    slug: "ride-1",
    driver: "John Doe",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    car: "Opel Adam",
    date: "28.05.2023",
    time: "16:00 Uhr",
    departure: "Melsungen",
    meetingpoint: "Am Sand",
    destination: "Kassel",
    seats: 1,
    price: 4,
    currency: "€",
  },
  {
    id: "2",
    slug: "ride-2",
    driver: "Jane Doe",
    rating: "⭐️⭐️⭐️",
    car: "Opel Astra",
    date: "30.05.2023",
    time: "12:00 Uhr",
    departure: "Malsfeld",
    meetingpoint: "Festplatz",
    destination: "Melsungen",
    seats: 3,
    price: 2,
    currency: "€",
  },
  {
    id: "3",
    slug: "ride-3",
    driver: "Max Mustermann",
    rating: "⭐️⭐️⭐️⭐️",
    car: "VW Golf",
    date: "08.06.2023",
    time: "09:00 Uhr",
    departure: "Schwarzenberg",
    meetingpoint: "DGH",
    destination: "Körle",
    seats: 2,
    price: 2,
    currency: "€",
  },
  {
    id: "4",
    slug: "ride-4",
    driver: "Melanie Mustermann",
    car: "VW UP",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    date: "30.06.2023",
    time: "16:00 Uhr",
    departure: "Melsungen",
    meetingpoint: "Am Sand",
    destination: "Kassel",
    seats: 3,
    price: 4,
    currency: "€",
  },
  {
    id: "5",
    slug: "ride-5",
    driver: "Martin Mustermann",
    car: "Mercedes A-Klasse",
    rating: "⭐️⭐️⭐️",
    date: "03.07.2023",
    time: "16:30 Uhr",
    departure: "Beiseförth",
    meetingpoint: "Sportplatz",
    destination: "Bebra",
    seats: 1,
    price: 3,
    currency: "€",
  },
];

test("has the correct href attribute.", () => {
  render(
    <StyledLink href={`/detail-ride/${testRides[0].slug}`}>
      Auswählen
    </StyledLink>
  );

  const Link = screen.getByRole("link");
  expect(Link).toHaveAttribute("href", "/detail-ride/ride-1");
});
