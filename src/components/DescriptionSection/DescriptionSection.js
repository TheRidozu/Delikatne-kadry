import React, { useEffect, useRef } from "react"
import {
  StyledDescriptionSection,
  StyledDescriptionSectionH2,
  StyledDescriptionSectionParag,
} from "./StyledDescripitonSection"
import { StyledContainerWrapper } from "../StyledContainerWrapper/StyledContainerWrapper"
import { fadeAnimation } from "../../style/Animation"

const DescriptionSection = ({ title, content }) => {
  const descriptionSectionRef = useRef(null)
  const sectionContainer = useRef(null)

  useEffect(() => {
    fadeAnimation(
      sectionContainer.current,
      descriptionSectionRef.current,
      "30%"
    )
  })

  return (
    <StyledDescriptionSection ref={descriptionSectionRef}>
      <StyledContainerWrapper ref={sectionContainer}>
        <StyledDescriptionSectionH2>{title}</StyledDescriptionSectionH2>
        <StyledDescriptionSectionParag>{content}</StyledDescriptionSectionParag>
      </StyledContainerWrapper>
    </StyledDescriptionSection>
  )
}

export default DescriptionSection
