import React, { useEffect, useRef } from "react"
import { fadeAnimation, flowerAnimation } from "../../style/Animation"

import {
  StyledQuoteSection,
  StyledImageQuoteSection,
  StyledFigcaption,
} from "./StyledQuoteSection"
import flowerImg from "../../assets/images/flower.png"
import { StyledContainerWrapper } from "../StyledContainerWrapper/StyledContainerWrapper"

const QuoteSection = () => {
  const quoteSectionRef = useRef(null)
  const quoteContainerRef = useRef(null)
  const flowerRef = useRef(null)
  useEffect(() => {
    const flower = flowerRef.current

    flowerAnimation(flower, quoteSectionRef.current, "left")
    fadeAnimation(quoteContainerRef.current, quoteSectionRef.current, "bottom")
  })

  return (
    <StyledQuoteSection ref={quoteSectionRef}>
      <StyledContainerWrapper ref={quoteContainerRef}>
        <figure>
          <blockquote>
            „Światło jest źródłem wszystkiego. Tym co sprawia, że rzeczy stają
            się widzialne dla oczu. Tym co sprawia, że skały nie rozpadają się.
            Moje poglądy są głęboko uzależnione od wiary w to, że rzeczy są
            pewną pochodną emitowanej energii. Światło, to najpełniejsza prawda
            wszechświata.”
          </blockquote>
          <StyledFigcaption>Wynn Bullock</StyledFigcaption>
        </figure>
        <StyledImageQuoteSection
          ref={flowerRef}
          src={flowerImg}
          alt="gray flower on the right"
        />
      </StyledContainerWrapper>
    </StyledQuoteSection>
  )
}

export default QuoteSection
