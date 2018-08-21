import { graphql, StaticQuery } from 'gatsby';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Column, Container, Row } from 'react-rasta';
import styled, { ThemeProvider } from 'styled-components';
import { prop } from 'styled-tools';
import themes from '../styles/theme';
import Header from './Header';
import './layout.css';

const { primary, secondary } = themes;

const StyledContainer = styled(Container)`
  background: ${prop('theme.colors.gradient')};
`;

const StyledButton = styled.button`
  font-family: sans-serif;
  position: fixed;
  background: ${prop('theme.colors.lightBlue')};
  border: 1px solid ${prop('theme.colors.textLight')};
  padding: 20px;
  color: ${prop('theme.colors.textLight')};
  box-shadow: 0px 4px 0px 0px ${prop('theme.colors.darkBlue')};
  border-radius: 4px;
  font-weight: 700;
  transition: all 300ms ease-in-out;
  right: 0;
  bottom: 0;
  margin-bottom: 24px;
  margin-right: 24px;
  outline: none;

  &:hover {
    right: 0px;
    bottom: -4px;
    box-shadow: 0 0 0 0 ${prop('theme.colors.blueGreen')};
  }
`;

export default class Layout extends Component {
  state = {
    currTheme: primary,
  };

  handleThemeChange = e => {
    e.preventDefault();

    this.setState(prevState => {
      if (prevState.currTheme === primary) {
        return {
          currTheme: secondary,
        };
      }

      return { currTheme: primary };
    });
  };

  render() {
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <ThemeProvider theme={this.state.currTheme}>
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
              {this.props.children}
                  <StyledButton
                    onClick={e => this.handleThemeChange(e)}
                    type="button"
                  >
                    Switch Theme
                  </StyledButton>
            </StyledContainer>
          </ThemeProvider>
        )}
      />
    );
  }
}
