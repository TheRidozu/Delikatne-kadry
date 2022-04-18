import React from "react"
import {
  StyledNav,
  StyledCurrentPage,
  StyledPagination,
  StyledDotWrapper,
  StyledDot,
  StyledCurrentPageWrapper,
} from "./StyledSliderNav"
import SliderButton from "./SliderButton/SliderButton"

const dots = [
  {
    id: 1,
    link: "/",
    page: "O mnie",
  },
  {
    id: 2,
    link: "/pregnacy",
    page: "Fotografia ciążowa",
  },
  {
    id: 3,
    link: "/family",
    page: "Fotografia rodzinna",
  },
  {
    id: 4,
    link: "/children",
    page: "Fotografia dziecięca",
  },
  {
    id: 5,
    link: "/newborns",
    page: "Fotografia noworodkowa",
  },
  {
    id: 6,
    link: "/party",
    page: "Fotografia okolicznościowa",
  },
  {
    id: 7,
    link: "/women",
    page: "Fotografia kobieca",
  },
  {
    id: 8,
    link: "/wedding",
    page: "Fotografia ślubna",
  },
]

const SliderNav = ({ currentPage, prevLink, nextLink }) => {
  return (
    <StyledNav>
      <StyledCurrentPageWrapper>
        <SliderButton to={prevLink} direction="left" />
        <StyledCurrentPage>{currentPage}</StyledCurrentPage>
        <SliderButton to={nextLink} />
      </StyledCurrentPageWrapper>
      <StyledPagination>
        {dots.map(({ id, link, page }) => (
          <StyledDotWrapper key={id}>
            <StyledDot to={link} active={page === currentPage ? true : false} />
          </StyledDotWrapper>
        ))}
      </StyledPagination>
    </StyledNav>
  )
}

export default SliderNav
