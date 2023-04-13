import styled from "styled-components";
import Link from "next/link";

export const NavBarLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  color: var(--darkgrey);
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 0.5rem;
  margin-top: 1rem;
  text-decoration: none;
`;
