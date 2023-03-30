import List from "./List";
import { render, screen } from "@testing-library/react";

const testRides = [
  {
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
  },
  {
    id: "2",
    driver: "Jane Doe",
    rating: "⭐️⭐️⭐️",
    date: "30.05.2023",
    time: "12:00 Uhr",
    departure: "Malsfeld",
    destination: "Melsungen",
    seats: 3,
    price: 2,
    currency: "€",
  },
  {
    id: "3",
    driver: "Max Mustermann",
    rating: "⭐️⭐️⭐️⭐️",
    date: "08.06.2023",
    time: "09:00 Uhr",
    departure: "Schwarzenberg",
    destination: "Körle",
    seats: 2,
    price: 2,
    currency: "€",
  },
];

test("all list items have accessible images", () => {
  render(<List rides={testRides} />);
  const images = screen.getAllByRole("img");
  expect(images).toHaveLength(3);
  expect(images[0]).toHaveAttribute("alt", "profile pic");
  expect(images[1]).toHaveAttribute("alt", "profile pic");
  expect(images[2]).toHaveAttribute("alt", "profile pic");
});
