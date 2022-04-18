import styled from "styled-components"
import Img from "gatsby-image"

export const SyledGallery = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  @media (min-width: ${({ theme }) => theme.device.m}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${({ theme }) => theme.device.l}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const StyledGalleryImg = styled(Img)`
  @supports (aspect-ratio: 1) {
    aspect-ratio: 1;
  }
`
