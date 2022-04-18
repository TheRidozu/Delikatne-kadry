import styled, { css } from "styled-components"

export const StyledHeaderSection = styled.header`
  background: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding: 20px 0;
`

export const StyledContainer = styled.div`
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledLogo = styled.img`
  height: 100%;
`

export const HeaderFlowerImg = styled.img`
  width: 200px;
  max-height: 100%;
  position: relative;
  right: 100px;

  ${({ left }) =>
    left &&
    css`
      left: 100px;
      transform: scaleX(-1);
    `};
`
