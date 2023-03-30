import SecondHeading from "./SecondHeading.styled";
import { render, screen } from "@testing-library/react";

test("second heading is displayed", () => {
  render(<SecondHeading>Übersicht – Alle Fahrten</SecondHeading>);
  const element = screen.getByRole("heading");
  expect(element).toBeInTheDocument();
});
