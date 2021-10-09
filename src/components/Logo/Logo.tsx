import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import cnft from '../../assets/img/logo.png'

const Logo: React.FC = () => {
  return (
    <StyledLogo to="/">
      <img src={cnft} height="48" style={{ marginTop: -4 }} />
      <StyledText>
        CheeseSwap NFT
      </StyledText>
    </StyledLogo>
  )
}

const StyledLogo = styled(Link)`
  background: #130A0C;
  width: 100%;
  display: flex;
  padding: 1rem;
  bottom: 0px;
  align-items: center;
  
 
`

const StyledText = styled.span`
  color: ${(props) => props.theme.color.grey[600]};
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.03em;
  margin-left: ${(props) => props.theme.spacing[2]}px;
`

export default Logo
