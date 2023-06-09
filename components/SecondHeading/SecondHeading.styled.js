import styled from "styled-components";

const SecondHeading = styled.h3`
  text-align: left;
  margin: 0.5rem;
  padding: 0.5rem;
  position: ${(props) => (props.$sticky ? "sticky" : "default")};
  top: 0;
  width: 100%;
  background-color: var(--white);
`;
export default SecondHeading;
