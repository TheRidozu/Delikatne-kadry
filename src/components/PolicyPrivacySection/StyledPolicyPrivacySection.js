import styled from "styled-components"

export const StyledPolicyPrivacySection = styled.div`
  text-align: left;
  color: ${props => props.theme.colors.violet};
  padding: 60px 60px;
  @media (min-width: ${({ theme }) => theme.device.m}) {
    font-size: 20px;
    padding: 90px 150px;
  }
`

export const StyledPolicyH2 = styled.h2`
  margin: 25px 0;
`

export const StyledPolicySubList = styled.ul`
  padding-left: 35px;
`

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.violet};
  text-decoration: none;
`
