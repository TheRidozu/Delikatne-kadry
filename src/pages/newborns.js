import React from "react"
import { graphql } from "gatsby"
import GallerySection from "../components/GallerySection/GallerySection"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../style/GlobalStyle"
import { theme } from "../style/theme"
import Layout from "../components/Layout/Layout"
import FinallySlider from "../components/FinallySlider/FinallySlider"
import leftImg from "../components/../assets/images/home/4.A-girl-with-a-wreath-on-her-head-sitting-in-a-basket.jpg"
import mainImg from "../components/../assets/images/home/5.Newborn-baby-on-a-white-background.jpg"
import rightImg from "../components/../assets/images/home/6.A-girl-with-prayer-folded-hands-with-a-wreath-on-her-head.jpg"
import DescriptionSection from "../components/DescriptionSection/DescriptionSection"

const currentPage = "Fotografia noworodkowa"
const nextLink = "/party"
const prevLink = "/family"

const slideImages = {
  leftImg,
  mainImg,
  rightImg,
}

const ChildrenPage = ({ data }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>
      <FinallySlider
        currentPage={currentPage}
        nextLink={nextLink}
        prevLink={prevLink}
        slideImages={slideImages}
      />
      <DescriptionSection title="Fotografia Noworodkowa" content="" />
      <GallerySection data={data} />
    </Layout>
  </ThemeProvider>
)

export const query = graphql`
  query GetNewbornsPhotos {
    allFile(
      filter: {
        extension: { regex: "/(jpg)/" }
        relativeDirectory: { eq: "newborns" }
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
            id
          }
        }
      }
    }
  }
`

export default ChildrenPage
