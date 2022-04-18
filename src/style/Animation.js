import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const animationMoveX = element => {
  gsap.fromTo(
    element,
    { autoAlpha: 0, y: "-=100", duration: 1 },
    {
      autoAlpha: 1,
      y: 0,
    }
  )
}

export const flowerAnimation = (element, triggerElement, direction) => {
  if (direction === "left") {
    gsap.fromTo(
      element,
      {
        autoAlpha: 0,
        transform: "scale(0)",
      },
      {
        autoAlpha: 1,
        transform: "scale(1)",
        duration: 3,
        scrollTrigger: {
          trigger: triggerElement,
          start: "top bottom",
        },
      }
    )
  }
  if (direction === "right") {
    gsap.fromTo(
      element,
      {
        autoAlpha: 0,
        transform: "scale(0)",
      },
      {
        autoAlpha: 1,
        transform: "scale(1)",
        duration: 3,
        scrollTrigger: {
          trigger: triggerElement,
          start: "top bottom",
        },
      }
    )
  } else {
    gsap.fromTo(
      element,
      {
        autoAlpha: 0,
        transform: "scale(0)",
      },
      {
        autoAlpha: 1,
        transform: "scale(1)",
        duration: 3,
        scrollTrigger: {
          trigger: triggerElement,
          start: "top bottom",
        },
      }
    )
  }
}

export const fadeAnimation = (
  element,
  triggerElement,
  triggerPosition = "50%"
) => {
  gsap.fromTo(
    element,
    {
      y: "+=800px",
      autoAlpha: 0,
    },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.5,
      scrollTrigger: {
        trigger: triggerElement,
        start: `top ${triggerPosition}`,
      },
    }
  )
}

export const h2Animation = (element, triggerElement) => {
  gsap.fromTo(
    element,
    {
      y: "+=100px",
      autoAlpha: 0,
    },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: triggerElement,
        start: "top 50%",
      },
    }
  )
}

export const colsAnimation = (element, triggerElement, direction) => {
  if (direction === "left") {
    gsap.fromTo(
      element,
      {
        alpha: 0,
      },
      {
        alpha: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: triggerElement,
          start: "top 50%",
        },
      }
    )
  } else if (direction === "right") {
    gsap.fromTo(
      element,
      {
        alpha: 0,
      },
      {
        alpha: 1,
        duration: 1,
        scrollTrigger: {
          trigger: triggerElement,
          start: "top 50%",
        },
      }
    )
  }
}
