import React from 'react'
import styled from 'styled-components'

import Container from '../Container'
import Logo from '../Logo'

import AccountButton from './components/AccountButton'
import Nav from './components/Nav'

interface TopBarProps {
  onPresentMobileMenu: () => void
}

const TopBar: React.FC<TopBarProps> = ({ onPresentMobileMenu }) => {
  return (
    <StyledTopBar>
      <ContainerNav>
        <StyledTopBarInner>
          <StyledLogoWrapper>
            <Logo />
          </StyledLogoWrapper>
          <Nav />
          <StyledAccountButtonWrapper>
            <AccountButton />
          </StyledAccountButtonWrapper>
        </StyledTopBarInner>
      </ContainerNav>
    </StyledTopBar>
  )
}

const StyledLogoWrapper = styled.div`

  @media (max-width: 960px) {
    width: auto;
  }
`
const StyledTopBar = styled.div`
background: #130A0C;
  box-sizing: border-box;
  z-index: 1;
  margin: 0px;
  min-width: 0px;
  width: 100vw;
  display: flex;
  padding: 1rem;
  bottom: 0px;
  align-items: flex-start;
  justify-content: space-evenly;
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: flex-start;
  }
@media (max-width: 960px) {
  margin-bottom: 60px;
}
`

const ContainerNav = styled.div`
box-sizing: border-box;
border-radius: 6x;
background: #130A0C;

margin: 0 auto;
max-width: 1200px;
padding: 0 32px;
width: 100%;
`
const StyledTopBarInner = styled.div`
  align-items: center;
  display: flex;
  height: ${(props) => props.theme.topBarSize}px;
  justify-content: space-between;
  max-width: ${(props) => props.theme.siteWidth}px;
  width: 100%;
  @media (max-width: 600px) {
    display: block;
    flex-direction: column;
    min-width: 0px;
    align-items: center;
}
  }
`
const StyledNavWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  @media (max-width: 400px) {
    display: none;
  }
`

const StyledAccountButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  @media (max-width: 400px) {
    justify-content: center;
    width: auto;
  }
`

const StyledMenuButton = styled.button`
  background: none;
  border: 4px;
  margin: 0;
  outline: 2px;
  padding: 0;
  display: none;
  @media (max-width: 960px) {
    align-items: center;
    display: flex;
    height: 44px;
    justify-content: center;
    width: 44px;
  }
`

export default TopBar
