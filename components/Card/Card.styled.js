import styled from "styled-components";

export const StyledCard = styled.article`
  display: grid;
  grid-template-columns: 30% 70%;
  align-items: center;
  justify-items: start;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 1.5rem;
  background-color: var(--yellow);
`;

export const StyledSpan = styled.span`
  margin-bottom: 1rem;
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
`;
