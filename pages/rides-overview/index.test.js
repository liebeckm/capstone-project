import { ListofRides } from ".";
import { render, screen } from "@testing-library/react";

test("Image has alt text", () => {
  render(ListofRides);
  const element = screen.getByRole("image");
  expect(element).toBeInTheDocument();
});
