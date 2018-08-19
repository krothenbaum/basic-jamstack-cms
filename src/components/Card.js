import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { Column, Row } from 'react-rasta';
import { rgba } from 'polished';

const StyledCard = styled(Column)`
  margin: 1rem 0;
  padding: 1.45rem;
  background-color: ${prop('theme.colors.textLight')};
  border-radius: 4px;
  box-shadow: 4px 4px 2px ${rgba('#323247', 0.2)};
  transition: all 250ms ease-out;

  &:hover {
    transform: translateY(-8px);
    transition: all 250ms ease-in;
  }
`;

const Heading = styled.h2`
  color: ${prop('theme.colors.darkBlue')};
`;
const Text = styled.div`
  font-family: sans-serif;
  & h3 {
    color: ${prop('theme.colors.lightBlue')}
  }

  $ pre {
    font-family: monospace;
  }

  & p {

    color: ${prop('theme.colors.textGrey')};
  }
`;
const Image = styled.img`
  display: flex;
  margin: 0 auto;
  width: 200px;
  height: 200px;
  border: 4px solid white;
  border-radius: 2px;
`;

const Card = ({ imgSrc, html, title }) => (
  <StyledCard size={6} alignSelf="center">
    <Row justifyContent="center" alignItems="center" direction="row">
      <Column size={4}>
        <Image src={imgSrc} />
      </Column>
      <Column size="auto">
        <Heading>{title}</Heading>
        <Text dangerouslySetInnerHTML={{ __html: html }} />
      </Column>
    </Row>
  </StyledCard>
);

export default Card;
