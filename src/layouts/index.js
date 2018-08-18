import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Container, Column, Row } from 'react-rasta'
import styled, { ThemeProvider } from 'styled-components'

import Header from '../components/header'
import './index.css'
import theme from '../styles/theme'

const StyledContainer = styled(Container)`
  background-color: ${theme.colors.blueGreen};
`

const Layout = ({ children, data }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledContainer fluid={true}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Row>
          <Column>
            <Header siteTitle={data.site.siteMetadata.title} />
          </Column>
        </Row>
        {children()}
      </StyledContainer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
