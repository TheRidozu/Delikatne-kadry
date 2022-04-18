import styled from "styled-components"
import iconImg from "../../assets/images/pink-flower.png"

export const StyledAboutMeSection = styled.section`
  background-color: ${props => props.theme.colors.pink};
  position: relative;
  color: ${props => props.theme.colors.violet};
`

export const StyledList = styled.ul`
  margin-top: 120px;
  list-style-type: none;
`

export const StyledListItem = styled.li`
  &::before {
    content: url(${iconImg});
    margin-right: 15px;
    font-size: 10px;
  }
`

export const StyledParagInfo = styled.p`
  margin-top: 120px;
`

export const StyledImageAboutMeSection = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: scaleX(-1);

  @media (min-width: ${({ theme }) => theme.device.m}) {
    height: 300px;
  }
`

export const StyledAboutMeSectionH2 = styled.h2`
  font-size: 50px;
  text-align: center;
  font-family: "MonteCarlo", cursive;
`
