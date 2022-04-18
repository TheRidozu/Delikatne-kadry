import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import {
  StyledSlider,
  StyledSlide,
  StyledSlideImg,
  StyledSlideLink,
} from "./StyledFinallySlider"
import SliderNav from "./SliderNav/SliderNav"
const FinallySlider = ({ currentPage, nextLink, prevLink, slideImages }) => {
  const leftSlideRef = useRef(null)
  const mainSlideRef = useRef(null)
  const rightSlideRef = useRef(null)

  useEffect(() => {
    if (window.innerWidth >= 768) {
      gsap.fromTo(
        leftSlideRef.current,
        {
          autoAlpha: 0,
          x: "-=250",
        },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.5,
        }
      )
      gsap.fromTo(
        rightSlideRef.current,
        {
          autoAlpha: 0,
          x: "+=250",
        },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.5,
        }
      )
    }

    gsap.fromTo(
      mainSlideRef.current,
      {
        autoAlpha: 0,
        y: "-=250",
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
      }
    )
  })

  return (
    <>
      <StyledSlider>
        <StyledSlideLink to={prevLink}>
          <StyledSlide ref={leftSlideRef} left>
            <StyledSlideImg
              src={slideImages.leftImg}
              alt={slideImages.leftImg.split(".")[1]}
            />
          </StyledSlide>
        </StyledSlideLink>
        <StyledSlide ref={mainSlideRef}>
          <StyledSlideImg
            src={slideImages.mainImg}
            alt={slideImages.leftImg.split(".")[1]}
          />
        </StyledSlide>
        <StyledSlideLink to={nextLink}>
          <StyledSlide ref={rightSlideRef} right>
            <StyledSlideImg
              src={slideImages.rightImg}
              alt={slideImages.leftImg.split(".")[1]}
            />
          </StyledSlide>
        </StyledSlideLink>
      </StyledSlider>
      <SliderNav
        currentPage={currentPage}
        nextLink={nextLink}
        prevLink={prevLink}
      />
    </>
  )
}

export default FinallySlider
