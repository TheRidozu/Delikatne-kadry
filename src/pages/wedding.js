import React from "react"
import Layout from "../components/Layout/Layout"
// My imports
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../style/GlobalStyle"
import { theme } from "../style/theme"
import FinallySlider from "../components/FinallySlider/FinallySlider"
import leftImg from "../components/../assets/images/home/7.A-woman-holding-the-ends-of-her-hair-with-her-hand.jpg"
import mainImg from "../components/../assets/images/home/8.Flower.jpg"
import rightImg from "../components/../assets/images/home/1.A-woman-with-a-girl-sitting-on-the-blanket.jpg"

const currentPage = "Fotografia ślubna"
const nextLink = "/"
const prevLink = "/women"

const slideImages = {
  leftImg,
  mainImg,
  rightImg,
}

const WeddingPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <FinallySlider
          currentPage={currentPage}
          nextLink={nextLink}
          prevLink={prevLink}
          slideImages={slideImages}
        />
      </Layout>
    </ThemeProvider>
  )
}

export default WeddingPage
