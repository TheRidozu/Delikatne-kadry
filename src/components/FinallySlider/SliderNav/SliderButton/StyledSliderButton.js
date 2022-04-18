import styled from "styled-components"
import { Link } from "gatsby"

export const StyledSliderBtn = styled(Link)`
  left: ${({ direction }) => direction && "-20px"};
  right: ${({ direction }) => direction || "-20px"};
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
`

export const StyledArrowIcon = styled.img``
