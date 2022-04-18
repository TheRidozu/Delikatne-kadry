import styled from "styled-components";

export const StyledDescriptionSection = styled.section`
  background-color: ${(props) => props.theme.colors.pink};
  color: ${(props) => props.theme.colors.violet};
`;

export const StyledDescriptionSectionH2 = styled.h2`
  font-size: 50px;
  margin-bottom: 35px;
  font-family: "MonteCarlo", cursive;
  line-height: 70px;
`;

export const StyledDescriptionSectionParag = styled.p`
  margin: 0;
`;
