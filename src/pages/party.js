import React from "react"
import { graphql } from "gatsby"
import GallerySection from "../components/GallerySection/GallerySection"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../style/GlobalStyle"
import { theme } from "../style/theme"
import DescriptionSection from "../components/DescriptionSection/DescriptionSection"
import Layout from "../components/Layout/Layout"
import FinallySlider from "../components/FinallySlider/FinallySlider"
import leftImg from "../components/../assets/images/home/5.Newborn-baby-on-a-white-background.jpg"
import mainImg from "../components/../assets/images/home/6.A-girl-with-prayer-folded-hands-with-a-wreath-on-her-head.jpg"
import rightImg from "../components/../assets/images/home/7.A-woman-holding-the-ends-of-her-hair-with-her-hand.jpg"

const title = "Fotografia okolicznościowa.",
  content = `Chrzciny, komunia, złote gody?
  Zatrzymaj tę celebrację i rodzinną bliskość w czasie.
  Niezależnie od okazji, wspólnie opracujemy koncept na sesje, tak
  bycie mogli zatrzymać to, co najcenniejsze – obecność, rodzinność,
  radość.`

const currentPage = "Fotografia okolicznościowa"
const nextLink = "/women"
const prevLink = "/children"

const slideImages = {
  leftImg,
  mainImg,
  rightImg,
}

const PartyPage = ({ data }) => (
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
  query GetPartyPhotos {
    allFile(
      filter: {
        extension: { regex: "/(jpg)/" }
        relativeDirectory: { eq: "party" }
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

export default PartyPage
