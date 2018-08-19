import React from 'react';
import { graphql } from 'gatsby';
import { Row } from 'react-rasta';
import Layout from '../components/Layout';
import Card from '../components/Card';

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Row justifyContent="center" alignContent="center" direction="column">
        {edges.map((item, index) => {
          const { html, frontmatter } = item.node;
          const { title, imgSrc } = frontmatter;
          const randomSrc = `${imgSrc}?=sig${index}`;
          return (
            <Card title={title} imgSrc={randomSrc} html={html} key={index} />
          );
        })}
      </Row>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPosts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            imgSrc
          }
          html
        }
      }
    }
  }
`;

export default IndexPage;
