import React from "react"
import { StyledSliderBtn } from "./StyledSliderButton"
import leftArrow from "./SliderIcons/left-arrow.png"
import rightArrow from "./SliderIcons/right-arrow.png"

const SliderButton = ({ direction, to }) => {
  return (
    <StyledSliderBtn to={to} direction={direction}>
      <img
        src={direction === "left" ? leftArrow : rightArrow}
        alt={direction === "left" ? "left slider arrow" : "right slider arrow"}
      />
    </StyledSliderBtn>
  )
}

export default SliderButton
