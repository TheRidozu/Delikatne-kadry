import React from "react"
// Sections
import QuoteSection from "../QuoteSection/QuoteSection"
import ContactSection from "../ContactSection/ContactSection"
import HeaderSection from "../HeaderSection/HeaderSection"
const Layout = ({ children }) => {
  return (
    <>
      <HeaderSection />
      <main>
        {children}
        <QuoteSection />
      </main>
      <ContactSection />
    </>
  )
}

export default Layout
