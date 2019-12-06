import React from 'react'
import styled from '@emotion/styled'

let StyledLayout = styled.main({
  width: '100%',
  padding: '2rem',
  margin: '3rem 0',
  display: 'flex',
  flexDirection: 'column'
})

const Layout = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>
}

export default Layout
