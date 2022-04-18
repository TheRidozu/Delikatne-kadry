import React from "react"

import Layout from "../components/Layout/Layout"
// My imports
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../style/GlobalStyle"
import { theme } from "../style/theme"
import AboutMeSection from "../components/AboutMeSection/AboutMeSection"
import FinallySlider from "../components/FinallySlider/FinallySlider"
import leftImg from "../components/../assets/images/home/8.Flower.jpg"
import mainImg from "../components/../assets/images/home/1.A-woman-with-a-girl-sitting-on-the-blanket.jpg"
import rightImg from "../components/../assets/images/home/2.Pregnant-woman-with-garland-hovering-over-a-tree.jpg"
import Helmet from "react-helmet"

const currentPage = "O mnie"
const nextLink = "/pregnacy"
const prevLink = "/wedding"

const slideImages = {
  leftImg,
  mainImg,
  rightImg,
}

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Helmet>
          <html lang="pl-PL" />
          <title>Fotografia ślubna</title>
          <meta name="description" content="Fotografia dziecięca" />
          <meta name="keywords" content="Fotograf, dzieci" />
          <meta property="og:title" content="" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="Fotografia dziecięca" />
          <meta property="og:image" content="" />
          <meta property="og:locale" content="en_Us" />
          <meta property="og:url" content="" />
          <link rel="canonical" href="" />
        </Helmet>
        <FinallySlider
          currentPage={currentPage}
          nextLink={nextLink}
          prevLink={prevLink}
          slideImages={slideImages}
        />
        <AboutMeSection />
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage
