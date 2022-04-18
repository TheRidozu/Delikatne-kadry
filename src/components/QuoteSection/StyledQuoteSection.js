import styled from "styled-components";

export const StyledQuoteSection = styled.section`
  background-color: ${(props) => props.theme.colors.pink};
  position: relative;
  color: ${(props) => props.theme.colors.violet};
`;
export const StyledImageQuoteSection = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;

  @media (min-width: ${({ theme }) => theme.device.m}) {
    height: 300px;
  }
`;

export const StyledFigcaption = styled.figcaption`
  margin-top: 20px;
`;
