import styled from "styled-components";

export const StyledContainerWrapper = styled.div`
  font-size: 20px;
  text-align: center;
  padding: 60px 30px;

  @media (min-width: ${({ theme }) => theme.device.m}) {
    padding: 100px 40px;
    font-size: 23px;
  }

  @media (min-width: ${({ theme }) => theme.device.l}) {
    padding: 100px 140px;
    font-size: 27px;
  }

  @media (min-width: ${({ theme }) => theme.device.xl}) {
    padding: 150px 250px;
  }
`;
