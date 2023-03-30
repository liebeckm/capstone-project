import styled from "styled-components";

export const StyledCard = styled.article`
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 1rem;
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

export const StyledDescriptionTerm = styled.dt`
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
  display: inline;
  flex-direction: column;
`;

export const StyledDescriptionDetails = styled.dd`
  margin-bottom: 0.7rem;
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
  font-weight: 600;
`;

export const StyledDateAndTime = styled.p`
  margin-bottom: 0.7rem;
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
  font-weight: 800;
  font-size: 16px;
`;
