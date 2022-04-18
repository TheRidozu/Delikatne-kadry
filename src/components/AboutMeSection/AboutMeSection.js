import React, { useRef, useEffect } from "react"
import flowerImg from "../../assets/images/flower.png"
import {
  StyledAboutMeSection,
  StyledParagInfo,
  StyledImageAboutMeSection,
  StyledList,
  StyledListItem,
  StyledAboutMeSectionH2,
} from "./StyledAboutMeSection"
import { flowerAnimation, fadeAnimation } from "../../style/Animation"
import { StyledContainerWrapper } from "../StyledContainerWrapper/StyledContainerWrapper"

const AboutMeSection = () => {
  const flowerRef = useRef(null)
  const styledAboutMeSectionRef = useRef(null)
  const textRef = useRef(null)
  useEffect(() => {
    flowerAnimation(flowerRef.current, styledAboutMeSectionRef.current, "left")
    fadeAnimation(textRef.current, styledAboutMeSectionRef.current)
  })

  return (
    <StyledAboutMeSection ref={styledAboutMeSectionRef}>
      <StyledContainerWrapper ref={textRef}>
        <StyledAboutMeSectionH2>
          Zapraszam Was do mojego świata
        </StyledAboutMeSectionH2>
        <p>
          Gdzie przy pomocy światła uchwycam i tkam momenty Waszego życia, które
          zechcecie mi pokazać. Pokochałam fotografię dziecięcą, ale z radością
          zajmuję się również:
        </p>
        <StyledList>
          <StyledListItem>fotografią niemowlęcą</StyledListItem>
          <StyledListItem>fotografią rodzinną</StyledListItem>
          <StyledListItem>fotografią kobiecą</StyledListItem>
          <StyledListItem>fotografią ciążową</StyledListItem>
          <StyledListItem>fotografią okolicznościową</StyledListItem>
          <StyledListItem>sesjami zdjęciowymi z filmem.</StyledListItem>
        </StyledList>
        <StyledParagInfo>
          <strong>
            Wchodząc w odpowiednią zakładkę ujrzycie efekty mojej pracy i
            będziecie mogli zdecydować, którą sesje chcecie wybrać dla siebie
          </strong>
        </StyledParagInfo>
        <StyledImageAboutMeSection
          ref={flowerRef}
          src={flowerImg}
          alt="gray flower on the left"
        />
      </StyledContainerWrapper>
    </StyledAboutMeSection>
  )
}

export default AboutMeSection
