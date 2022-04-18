import React from "react"
import {
  StyledFooterSection,
  StyledIconWrapper,
  StyledContactInfo,
  StyledLink,
  StyledGatsbyLink,
} from "./StyledFooterSection"
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
const FooterSection = () => {
  return (
    <StyledFooterSection>
      <StyledIconWrapper>
        <StyledLink
          href="https://www.facebook.com/JustynaKokotWlazlyPhotography/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </StyledLink>
        <StyledLink
          href="https://www.instagram.com/delikatne_kadry/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </StyledLink>
      </StyledIconWrapper>
      <StyledContactInfo>
        <p>Justyna Kokot-Wlazły</p>
        <p>
          <strong>Numer telefonu:</strong>
        </p>
        <p>577-349-039</p>
        <p>
          <strong>Email:</strong>
        </p>
        <p>delikatnekadry@gmail.com</p>
        <p>
          <strong>Adres:</strong>
        </p>
        <p>ul. Brzezińska 56, 42-208 Częstochowa</p>
      </StyledContactInfo>
      <p>
        <StyledGatsbyLink to="/policy-privacy">
          Polityka prywatności
        </StyledGatsbyLink>
      </p>
      <p style={{ zIndex: 5 }}>
        <StyledLink
          href="https://studiovisign.com/"
          target="_blank"
          rel="noreferrer"
        >
          studiovisign.com
        </StyledLink>
      </p>
    </StyledFooterSection>
  )
}

export default FooterSection
