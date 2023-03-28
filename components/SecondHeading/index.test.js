import SecondHeading from ".";
import { render, screen } from "@testing-library/react";

test("second heading is displayed", () => {
  render(<SecondHeading>Übersicht – Alle Fahrten</SecondHeading>);
  const element = screen.getByText("Übersicht – Alle Fahrten");
  expect(element).toBeInTheDocument();
});
