import React, { useRef, useEffect } from "react"
import {
  StyledContactSection,
  StyledContactSectionH2,
  StyledForm,
  StyledInput,
  StyledTextarea,
  StyledImageContactSection,
  StyledContactWrapper,
  StyledCol1,
  StyledCol2,
  StyledSubmitButton,
} from "./StyledContactSection"
import flowerImg from "../../assets/images/flower.png"
import FooterSection from "./FooterSection/FooterSection"
import emailjs from "emailjs-com"
import {
  flowerAnimation,
  h2Animation,
  colsAnimation,
} from "../../style/Animation"
const ContactSection = () => {
  function sendEmail(e) {
    e.preventDefault()
    emailjs
      .sendForm(
        "service_ac8h4x1",
        "template_12ojag7",
        e.target,
        "user_VBww0l5gik1uro491Jfs1"
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
  }

  const flowerRef = useRef(null)
  const contactSectionRef = useRef(null)
  const h2Ref = useRef(null)
  const col1Ref = useRef(null)
  const col2Ref = useRef(null)
  useEffect(() => {
    flowerAnimation(flowerRef.current, contactSectionRef.current)
    h2Animation(h2Ref.current, contactSectionRef.current)
    colsAnimation(col1Ref.current, contactSectionRef.current, "left")
    colsAnimation(col2Ref.current, contactSectionRef.current, "right")
  })

  return (
    <StyledContactSection ref={contactSectionRef}>
      <StyledContactSectionH2 ref={h2Ref}>Kontakt</StyledContactSectionH2>
      <StyledContactWrapper>
        <StyledCol1 ref={col1Ref}>
          <StyledForm onSubmit={sendEmail}>
            <StyledInput
              type="text"
              placeholder="Imię i nazwisko"
              name="name"
              required
            />
            <StyledInput
              type="email"
              placeholder="E-mail"
              name="email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
            <StyledInput
              type="tel"
              placeholder="Numer telefonu"
              name="phone"
              required
            />
            <StyledTextarea
              placeholder="Wiadomość"
              name="msg"
              required
            ></StyledTextarea>
            <StyledSubmitButton type="submit">Wyślij</StyledSubmitButton>
          </StyledForm>
          <StyledImageContactSection
            ref={flowerRef}
            src={flowerImg}
            alt="gray flower on the bottom"
          />
        </StyledCol1>
        <StyledCol2 ref={col2Ref}>
          <FooterSection />
        </StyledCol2>
      </StyledContactWrapper>
    </StyledContactSection>
  )
}

export default ContactSection
