import styled from "styled-components"
import { Link } from "gatsby"

export const StyledFooterSection = styled.footer`
  padding: 90px 30px;
  background-color: ${props => props.theme.colors.pink};
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.device.m}) {
    padding: 0;
  }
`

export const StyledIconWrapper = styled.div`
  font-size: 45px;
  color: ${props => props.theme.colors.violet};
  text-align: center;
  margin-bottom: 40px;
`

export const StyledLink = styled.a`
  color: ${props => props.theme.colors.violet};
  display: inline-block;
  transition: transform 0.3s ease-in-out;
  text-decoration: none;
  &:hover {
    transform: scale(1.2);
  }
  &:visited,
  &:link {
    color: ${props => props.theme.colors.violet};
  }
`

export const StyledContactInfo = styled.div`
  margin-bottom: 60px;
`
export const StyledGatsbyLink = styled(Link)`
  color: ${props => props.theme.colors.violet};
  display: inline-block;
  transition: transform 0.3s ease-in-out;
  text-decoration: none;
  &:hover {
    transform: scale(1.2);
  }
  &:visited,
  &:link {
    color: ${props => props.theme.colors.violet};
  }
`
