import React from "react"
import { graphql } from "gatsby"
import GallerySection from "../components/GallerySection/GallerySection"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../style/GlobalStyle"
import { theme } from "../style/theme"
import DescriptionSection from "../components/DescriptionSection/DescriptionSection"
import Layout from "../components/Layout/Layout"
import FinallySlider from "../components/FinallySlider/FinallySlider"
import leftImg from "../components/../assets/images/home/3.Parents-with-their-children-on-the-couch.jpg"
import mainImg from "../components/../assets/images/home/4.A-girl-with-a-wreath-on-her-head-sitting-in-a-basket.jpg"
import rightImg from "../components/../assets/images/home/5.Newborn-baby-on-a-white-background.jpg"

const title = "Fotografia dziecięca",
  content = `Doskonale wiem, że dzieci to nasze skarby, dlatego do każdej
  sesji podchodzę z dużą uwagą i troską, by stworzyć jak najbardziej
  sprzyjającą atmosferę dla Waszych maleństw.
  Mówi się, że w oczach dziecka można dostrzec cały
  wszechświat i ja zgadzam się z tym stwierdzeniem, dlatego sesje z
  nimi są dla mnie szczególnie ważne. Poświęcam przygotowaniom
  i konsultacjom z rodzicami tyle czasu ile potrzeba, a także nie
  spieszę i nie denerwuję podczas zdjęć, by dzieci były prawdziwie
  radosne.`

const currentPage = "Fotografia dziecięca"
const nextLink = "/newborns"
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
      <DescriptionSection title={title} content={content} />
      <GallerySection data={data} />
    </Layout>
  </ThemeProvider>
)

export const query = graphql`
  query GetChildrenPhotos {
    allFile(
      filter: {
        extension: { regex: "/(jpg)/" }
        relativeDirectory: { eq: "children" }
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
