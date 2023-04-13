import styled from "styled-components";

export const StyledCard = styled.article`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$gridfont ? "30% 30% 20%" : "100%"};
  gap: 1rem;
  align-items: center;
  justify-items: start;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 1.5rem;
  background-color: var(--yellow);
  font-size: ${(props) => (props.$gridfont ? "14px" : "default")};
`;

export const StyledDriverInformation = styled.article`
  display: grid;
  grid-template-columns: ${(props) => (props.$primary ? "30% 70%" : "40% 60%")};
  gap: 1rem;
  align-items: center;
  justify-items: start;
  padding: ${(props) => (props.$primary ? "0.5rem" : "default")};
  margin: 0.5rem;
  border-radius: ${(props) => (props.$primary ? "1.5rem" : "default")};
  background-color: ${(props) => (props.$primary ? "var(--white)" : "default")};
`;

export const StyledSpan = styled.span`
  margin-bottom: 1rem;
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const StyledSpanForDetailPage = styled.span`
  margin-bottom: ${(props) => (props.$marginbottom ? "3rem" : "1rem")};
  grid-row-start: 1;
  grid-column-start: 2;
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

export const StyledRideInformation = styled.p`
  margin-bottom: 0.7rem;
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
  font-weight: ${(props) => (props.$font ? "800" : "default")};
  font-size: ${(props) => (props.$font ? "16px" : "default")};
`;

export const StyledPaymentInformation = styled.p`
  margin-left: 0.5rem;
  margin-bottom: ${(props) => (props.$marginbottom ? "-1rem" : "default")};
  display: flex;
  flex-direction: column;
  font-weight: 800;
  font-size: 16px;
  color: var(--red);
`;
