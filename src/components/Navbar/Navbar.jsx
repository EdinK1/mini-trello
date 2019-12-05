import React from 'react'
import styled from '@emotion/styled'

let StyledNavbar = styled.header({
  background: 'linear-gradient(135deg, #0079bf,#5067c5)',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#fff'
})

let StyledHeading = styled.h2({
  cursor: 'pointer'
})

let StyledLinks = styled.ul({
  listStyleType: 'none',
  display: 'flex'
})

let StyledLink = styled.li({
  padding: '0 1rem',
  fontWeight: '800',
  cursor: 'pointer'
})

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledHeading>MiniTrello</StyledHeading>
      <StyledLinks>
        <StyledLink>Home</StyledLink>
        <StyledLink>About</StyledLink>
      </StyledLinks>
    </StyledNavbar>
  )
}

export default Navbar
