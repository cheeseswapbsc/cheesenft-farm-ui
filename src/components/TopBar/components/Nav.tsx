import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink exact activeClassName="active" to="/">
        Home
      </StyledLink>
      <StyledAbsoluteLink href="https://nft.cheeseswap.app/create" target="_blank" rel="noopener noreferrer">
        NFT ArtRoom
      </StyledAbsoluteLink>
      <StyledAbsoluteLink
        href="https://cheeseswap.app"
        target="_blank"
        rel="noopener noreferrer"
      >
      CheeseSwap
      </StyledAbsoluteLink>

      <StyledAbsoluteLink
        href="https://nft.cheeseswap.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        NFT (Beta)
      </StyledAbsoluteLink>

    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  @media (max-width: 1200px) {
    padding: ${(props) => props.theme.spacing[2]}px;
    justify-content: center;
  }
`

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.color.grey[400]};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 960px) {
    padding-left: ${(props) => props.theme.spacing[1]}px;
    padding-right: ${(props) => props.theme.spacing[1]}px;
    font-size: 12px;
  }
`

const StyledAbsoluteLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 960px) {
    padding-left: ${(props) => props.theme.spacing[1]}px;
    padding-right: ${(props) => props.theme.spacing[1]}px;
    font-size: 14px;
  }
`

export default Nav
