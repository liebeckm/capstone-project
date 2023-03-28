import Heading from ".";
import { render, screen } from "@testing-library/react";

test("first heading is displayed", () => {
  render(<Heading>landwaerts</Heading>);
  const element = screen.getByText("landwaerts");
  expect(element).toBeInTheDocument();
});
