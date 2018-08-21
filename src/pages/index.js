import { graphql } from 'gatsby';
import React from 'react';
import { Row } from 'react-rasta';
import Card from '../components/Card';
import Layout from '../components/Layout';

const IndexPage = ({ data }) => {
  const { edges } = data.allCard;
  const randomImg = Array.from({ length: 100 }, () => {
    return Math.floor(Math.random() * 100);
  });

  return (
    <Layout>
      <Row justifyContent="center" direction="column">
        {edges.map((item, index) => {
          const { title, imgSrc, markdown } = item.node;
          const randomSrc = `${imgSrc}?=sig${randomImg[Math.floor(Math.random() * index + index)]}`;
          console.log(randomSrc);
          return (
            <Card
              title={title}
              imgSrc={randomSrc}
              markdown={markdown}
              key={index}
            />
          );
        })}
      </Row>
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    allCard {
      edges {
        node {
          id
          title
          imgSrc
          markdown
        }
      }
    }
  }
`;

export default IndexPage;
