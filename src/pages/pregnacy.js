import React from "react"
import { graphql } from "gatsby"
import GallerySection from "../components/GallerySection/GallerySection"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../style/GlobalStyle"
import { theme } from "../style/theme"
import DescriptionSection from "../components/DescriptionSection/DescriptionSection"
import Layout from "../components/Layout/Layout"
import FinallySlider from "../components/FinallySlider/FinallySlider"
import leftImg from "../components/../assets/images/home/1.A-woman-with-a-girl-sitting-on-the-blanket.jpg"
import mainImg from "../components/../assets/images/home/2.Pregnant-woman-with-garland-hovering-over-a-tree.jpg"
import rightImg from "../components/../assets/images/home/3.Parents-with-their-children-on-the-couch.jpg"

const title = "Fotografia ciążowa",
  content = `Ciąża jest szczególnym czasem w życiu każdej kobiety i takie
  są również te sesje - wyjątkowe. Warto więc, by przyszła mama
  miała taką pamiątkę. Przyjdź do mnie ok. 7 miesiąca ciąży, gdyż
  brzuszek jest wtedy ładnie zaokrąglony, co pozwala najszczerzej
  oddać ten moment.
  Możesz zabrać ze sobą swojego Mężczyznę.`

const currentPage = "Fotografia ciążowa"
const nextLink = "/family"
const prevLink = "/"

const slideImages = {
  leftImg,
  mainImg,
  rightImg,
}

const PregnacyPage = ({ data }) => (
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
  query GetPregnacyPhotos {
    allFile(
      filter: {
        extension: { regex: "/(jpg)/" }
        relativeDirectory: { eq: "pregnacy" }
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

export default PregnacyPage
