import StyledNavBar from "./NavBar.styled";
import { NavBarLink } from "../Button/NavBarButton.styled";
import { NavBarIcon } from "./NavBarIcon.styled";

export default function NavBar() {
  return (
    <StyledNavBar className="navigation">
      <NavBarLink
        href={`/add-rides`}
        className="add-rides"
        onClick={() => {
          window.location.href = "/add-rides";
        }}
      >
        <NavBarIcon
          src={"/images/circle-plus-solid.svg"}
          alt="icon"
          width={25}
          height={25}
        />
        Fahrt hinzufügen
      </NavBarLink>
      <NavBarLink href={`/my-rides`} className="my-rides">
        <NavBarIcon
          src={"/images/car-solid.svg"}
          alt="icon"
          width={25}
          height={25}
        />
        Meine Fahrten
      </NavBarLink>
    </StyledNavBar>
  );
}
