import React from 'react'
import styled from '@emotion/styled'
import { FaMoon } from 'react-icons/fa'
import { Link } from '@reach/router'

let StyledNavbar = styled.header({
  background: 'linear-gradient(135deg, #0079bf,#5067c5)',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#fff'
})

let StyledHeading = styled.h2({
  fontWeight: '200'
})

let StyledList = styled.ul({
  listStyleType: 'none',
  display: 'flex'
})

let StyledListItem = styled.li({
  padding: '0 0.75rem'
})

let StyledLink = styled(Link)({
  textDecoration: 'none',
  fontWeight: '800',
  color: '#fff',
  transition: '0.3s all ease-in',
  [`:hover`]: {
    color: '#f4f4f4'
  }
})

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledHeading>
        <StyledLink to='/'>MiniTrello</StyledLink>
      </StyledHeading>
      <StyledList>
        <StyledListItem>
          <StyledLink to='/'>Home</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink to='/about'>About</StyledLink>
        </StyledListItem>
        <FaMoon style={{ marginLeft: '0.75rem' }} />
      </StyledList>
    </StyledNavbar>
  )
}

export default Navbar
