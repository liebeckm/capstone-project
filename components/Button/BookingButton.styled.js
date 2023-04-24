import styled from "styled-components";

export const BookingButton = styled.button`
  background-color: var(--green);
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 0.5rem;
  margin-top: 1rem;
  text-decoration: none;

  &:hover {
    background-color: var(--darkgreen);
  }
`;
