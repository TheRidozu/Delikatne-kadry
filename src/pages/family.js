import React from "react"
import { graphql } from "gatsby"
import GallerySection from "../components/GallerySection/GallerySection"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../style/GlobalStyle"
import { theme } from "../style/theme"
import DescriptionSection from "../components/DescriptionSection/DescriptionSection"
import Layout from "../components/Layout/Layout"
import FinallySlider from "../components/FinallySlider/FinallySlider"
import leftImg from "../components/../assets/images/home/2.Pregnant-woman-with-garland-hovering-over-a-tree.jpg"
import mainImg from "../components/../assets/images/home/3.Parents-with-their-children-on-the-couch.jpg"
import rightImg from "../components/../assets/images/home/4.A-girl-with-a-wreath-on-her-head-sitting-in-a-basket.jpg"

const title = "Fotografia rodzinna",
  content = `Pragniesz zrobić sobie i swoim bliskim wyjątkowy prezent? 
  Podaruj im rodzinną sesję fotograficzną, której efektem będzie 
  uchwycenie Waszej bliskości i nietuzinkowych momentów 
  z Waszego codziennego życia.`

const currentPage = "Fotografia rodzinna"
const nextLink = "/children"
const prevLink = "/pregnacy"

const slideImages = {
  leftImg,
  mainImg,
  rightImg,
}

const FamilyPage = ({ data }) => (
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
  query GetFamilyPhotos {
    allFile(
      filter: {
        extension: { regex: "/(jpg)/" }
        relativeDirectory: { eq: "family" }
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

export default FamilyPage
