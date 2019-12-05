import React from 'react'
import styled from '@emotion/styled'
import Navbar from './Navbar'

let StyledHeader = styled.header({
  background: 'linear-gradient(135deg, #0079bf,#5067c5)',
  padding: '0.5rem'
})

const Header = () => {
  return (
    <StyledHeader>
      <Navbar />
    </StyledHeader>
  )
}

export default Header
