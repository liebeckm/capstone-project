import styled from "styled-components";

export const StyledCard = styled.article`
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
  justify-items: start;
  padding: 0.5rem;
  margin: 0.5rem;
  margin-left: -1rem;
  margin-right: 1rem;
  border-radius: 1.5rem;
  background-color: var(--yellow);
`;
export const StyledSpan = styled.span`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;
