import styled from "styled-components"

export const StyledContactSection = styled.section`
  background-color: ${props => props.theme.colors.pink};
  font-size: 20px;
  position: relative;
  padding-top: 60px;
  color: ${props => props.theme.colors.violet};
  padding-bottom: 130px;
  @media (min-width: ${({ theme }) => theme.device.xl}) {
    padding: 130px 150px;
  }
`

export const StyledContactWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.device.m}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 35px;
    padding: 0px 40px;
  }
  @media (min-width: ${({ theme }) => theme.device.xl}) {
    padding: 0px 5%;
  }
`

export const StyledCol1 = styled.div`
  position: relative;
  z-index: 2;
  padding: 0px 30px 60px 30px;
`

export const StyledContactSectionH2 = styled.h2`
  font-size: 50px;
  text-align: center;
  font-family: "MonteCarlo", cursive;
`

export const StyledForm = styled.form`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 3;
  @media (min-width: ${({ theme }) => theme.device.m}) {
    margin-top: 0;
  }
`

export const StyledInput = styled.input`
  width: 100%;
  height: 20px;
  border: none;
  color: ${props => props.theme.colors.violet};
  padding: 20px 0 20px 20px;
  margin-bottom: 15px;
  transition: transform 0.3s ease-in-out;
  font-family: caladea;
  &::placeholder {
    color: ${props => props.theme.colors.violet};
  }
  &:focus {
    transform: scale(1.1);
  }
`
export const StyledTextarea = styled.textarea`
  height: 200px;
  padding: 20px 0 20px 20px;
  width: 100%;
  resize: none;
  border: none;
  transition: transform 0.3s ease-in-out;
  color: ${props => props.theme.colors.violet};
  font-family: caladea;
  &::placeholder {
    color: ${props => props.theme.colors.violet};
  }
  &:focus {
    transform: scale(1.1);
  }
`

export const StyledImageContactSection = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 400px;

  @media (min-width: ${({ theme }) => theme.device.m}) {
    right: -400px;
  }
`

export const StyledSubmitButton = styled.button`
  width: 100%;
  border: none;
  margin-top: 25px;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.violet};
  padding: 12px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  font-family: caladea;

  &:focus,
  &:hover {
    transform: scale(1.1);
  }
`

export const StyledCol2 = styled.div`
  position: relative;
`
