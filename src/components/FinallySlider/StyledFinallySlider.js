import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const StyledSlider = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding-bottom: 100px;
  @media (min-width: ${({ theme }) => theme.device.m}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const StyledSlide = styled.div`
  aspect-ratio: 1;
  opacity: 0;
  position: relative;
  cursor: pointer;
  transform: scale(0.9);
  font-size: 25px;
  ${({ left }) =>
    left &&
    css`
      display: none;
    `}
  ${({ right }) =>
    right &&
    css`
      display: none;
    `}
    @media (min-width: ${({ theme }) => theme.device.m}) {
    ${({ left }) =>
      left &&
      css`
        display: block;
        opacity: 1;
        transform: scale(0.8);
      `}
    ${({ right }) =>
      right &&
      css`
        display: block;
        opacity: 1;
        transform: scale(0.8);
      `}
  }
`

export const StyledSlideLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.violet};
`

export const StyledSlideImg = styled.img`
  width: 100%;
  height: 100%;
  -webkit-box-shadow: 5px 5px 11px 5px rgba(0, 0, 0, 0.5);
  box-shadow: 5px 5px 11px 5px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s ease-out;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`
