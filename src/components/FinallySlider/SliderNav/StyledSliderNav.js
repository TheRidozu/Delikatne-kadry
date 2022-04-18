import styled from "styled-components"
import { Link } from "gatsby"

export const StyledNav = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 20px 0;
  z-index: 98;
  color: #b3a0ac;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 130px;
  background: #f9f9f9;
`

export const StyledCurrentPageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 300px;
  @media (min-width: ${({ theme }) => theme.device.m}) {
    width: 410px;
  }
`

export const StyledCurrentPage = styled.h1`
  font-size: 25px;
  @media (min-width: ${({ theme }) => theme.device.m}) {
    font-size: 30px;
  }
`

export const StyledPagination = styled.ul`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  background: transparent;
`

export const StyledDotWrapper = styled.li`
  margin-left: 8px;
  border: none;
  background: #fff;
  transition: transform.2s ease-in-out;

  &:focus,
  &:hover {
    transform: scale(1.5);
  }
`

export const StyledDot = styled(Link)`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #b3a0ac;
  cursor: pointer;
  display: block;
  transition: border, width, height, background-color 0.5s ease-in-out;
  ${({ active }) =>
    active &&
    `
        border: 2px solid #B3A0AC;
        background: #fff;
        width: 12px;
        height: 12px;
    `}
`
