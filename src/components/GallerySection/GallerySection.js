import React from "react"
import { SyledGallery, StyledGalleryImg } from "./StyledGallerySection"

const GallerySection = ({ data }) => {
  return (
    <SyledGallery>
      {data.allFile.edges.map(({ node }) => (
        <StyledGalleryImg
          fluid={node.childImageSharp.fluid}
          alt={node.base.split(".")[0]}
          key={node.childImageSharp.id}
        />
      ))}
    </SyledGallery>
  )
}

export default GallerySection
