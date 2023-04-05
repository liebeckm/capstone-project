import styled from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  background-color: var(--green);
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 0.5rem;
  margin-top: 1rem;
  text-decoration: none;
`;

export const StyledLinkWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
`;
