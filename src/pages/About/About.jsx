import React from 'react'
import Layout from '../../components/Layout/Layout'
import styled from '@emotion/styled'

let StyledHeading = styled.h1({
  fontWeight: '300',
  borderBottom: '1px #f1f1f1 solid',
  paddingBottom: '0.3rem'
})

let StyledParagraph = styled.p({
  padding: '0.75rem 0',
  lineHeight: '1.8'
})

let StyledLink = styled.a({
  color: '#000'
})

const About = () => (
  <Layout>
    <StyledHeading>About This Project</StyledHeading>
    <StyledParagraph>
      This project was built for learning purposes only.
    </StyledParagraph>
    <StyledParagraph>
      If you have any questions or have any suggestions, please feel free to me
      shoot me a message on{' '}
      <StyledLink href='https://www.linkedin.com/in/edin-kaymakqi-3243b3163/'>
        linkedin
      </StyledLink>{' '}
      or open a issue on{' '}
      <StyledLink href='https://github.com/EdinK1/mini-trello/issues'>
        github.
      </StyledLink>
    </StyledParagraph>
  </Layout>
)

export default About
