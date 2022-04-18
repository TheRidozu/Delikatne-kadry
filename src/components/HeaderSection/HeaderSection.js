import React from "react"
import {
  StyledHeaderSection,
  StyledContainer,
  StyledLogo,
  HeaderFlowerImg,
} from "./StyledHeaderSection"
import flowerImg from "../../assets/images/flower.png"
import logoImg from "../../assets/images/logo.png"
import { Link } from "gatsby"
const HeaderSection = () => {
  return (
    <>
      <StyledHeaderSection>
        <Link to="/">
          <StyledContainer>
            <HeaderFlowerImg src={flowerImg} left alt="grey left flower" />
            <StyledLogo src={logoImg} alt="Justyna Kokot-Wlazły logo" />
            <HeaderFlowerImg src={flowerImg} alt="grey right flower" />
          </StyledContainer>
        </Link>
      </StyledHeaderSection>
    </>
  )
}

export default HeaderSection
