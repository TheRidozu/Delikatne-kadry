import React from "react"
import { graphql } from "gatsby"
import GallerySection from "../components/GallerySection/GallerySection"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../style/GlobalStyle"
import { theme } from "../style/theme"
import DescriptionSection from "../components/DescriptionSection/DescriptionSection"
import Layout from "../components/Layout/Layout"
import FinallySlider from "../components/FinallySlider/FinallySlider"
import leftImg from "../components/../assets/images/home/6.A-girl-with-prayer-folded-hands-with-a-wreath-on-her-head.jpg"
import mainImg from "../components/../assets/images/home/7.A-woman-holding-the-ends-of-her-hair-with-her-hand.jpg"
import rightImg from "../components/../assets/images/home/8.Flower.jpg"

const title = "Fotografia kobieca.",
  content = `Każda z nas jest inna, dlatego bardzo lubię te sesje, gdyż za
  każdym razem pokazują mi różne rodzaje kobiecego piękna, które
  mogę wyciągnąć na światło dzienne. Wyeksponuje Twoje zalety i
  urok osobisty. Będziesz mogła te zdjęcia podarować bliskim albo
  powiesić w swojej sypialni.`

const currentPage = "Fotografia kobieca"
const nextLink = "/wedding"
const prevLink = "/party"

const slideImages = {
  leftImg,
  mainImg,
  rightImg,
}

const WomenPage = ({ data }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>
      <FinallySlider
        currentPage={currentPage}
        nextLink={nextLink}
        prevLink={prevLink}
        slideImages={slideImages}
      />
      <DescriptionSection title={title} content={content} />
      <GallerySection data={data} />
    </Layout>
  </ThemeProvider>
)

export const query = graphql`
  query GetWomenPhotos {
    allFile(
      filter: {
        extension: { regex: "/(jpg)/" }
        relativeDirectory: { eq: "women" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid(quality: 100) {
              aspectRatio
              base64
              sizes
              src
              srcSet
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          id
        }
      }
    }
  }
`

export default WomenPage
