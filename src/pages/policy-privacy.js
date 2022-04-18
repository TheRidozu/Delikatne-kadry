import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../style/GlobalStyle"
import { theme } from "../style/theme"
import PolicyPrivacySection from "../components/PolicyPrivacySection/PolicyPrivacySection"
import HeaderSection from "../components/HeaderSection/HeaderSection"
const PolicyPrivacyPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HeaderSection />
      <PolicyPrivacySection />
    </ThemeProvider>
  )
}

export default PolicyPrivacyPage
