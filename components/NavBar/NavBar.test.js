import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBar from "./NavBar";

test('text "Meine Fahrten" is displayed within the NavBarLink component', async () => {
  render(<NavBar />);
  const navBarLink = screen.getByRole("link", { name: /Meine Fahrten/i });
  expect(navBarLink).toBeInTheDocument();
});
