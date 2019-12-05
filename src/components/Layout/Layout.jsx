import React from 'react'
import styled from '@emotion/styled'

let StyledLayout = styled.main({
  width: '100%',
  padding: '2rem',
  margin: '3rem 0',
  background: '#f1f1f1',
  display: 'flex',
  flexDirection: 'row'
})

const Layout = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>
}

export default Layout
