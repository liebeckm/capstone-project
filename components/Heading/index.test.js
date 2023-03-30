import Heading from "./Heading.styled";
import { render, screen } from "@testing-library/react";

test("first heading is displayed", () => {
  render(<Heading>landwaerts</Heading>);
  const element = screen.getByRole("heading");
  expect(element).toBeInTheDocument();
});
