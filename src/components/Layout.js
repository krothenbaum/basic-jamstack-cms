import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Column, Row } from 'react-rasta';
import styled, { ThemeProvider } from 'styled-components';
import { prop } from 'styled-tools';
import Header from './Header';
import './layout.css';
import themes from '../styles/theme';

const { primary, secondary } = themes;

const StyledContainer = styled(Container)`
  background-color: ${primary.colors.blueGreen};
`;

const StyledButton = styled.button`
  font-family: sans-serif;
  position: relative;
  background: ${prop('theme.colors.lightBlue')};
  border: 1px solid ${prop('theme.colors.textLight')};
  padding: 20px;
  color: ${prop('theme.colors.textLight')};
  box-shadow: 4px 4px 0px 0px ${prop('theme.colors.darkBlue')};
  font-weight: 700;
  transition: all 300ms ease-in-out;
  left: 0;
  top: 0;

  &:hover {
    left: 4px;
    top: 4px;
    box-shadow: 0 0 0 0 ${prop('theme.colors.blueGreen')};
  }
`;

export default class Layout extends Component {
  state = {
    currTheme: primary,
  };

  // componentDidMount() {
  //   this.setState({
  //     currTheme: themes.primary,
  //   });
  // }

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
                  <StyledButton
                    onClick={e => this.handleThemeChange(e)}
                    type="button"
                  >
                    Switch Theme
                  </StyledButton>
                </Column>
              </Row>
              {this.props.children}
            </StyledContainer>
          </ThemeProvider>
        )}
      />
    );
  }
}
