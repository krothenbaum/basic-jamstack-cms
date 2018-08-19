import React from 'react';
import { graphql } from 'gatsby';
import { Row } from 'react-rasta';
import Layout from '../components/Layout';
import Card from '../components/Card';

const IndexPage = ({ data }) => {
  const { edges } = data.allCard;
  const randomImg = Array.from({length: 3}, () => {
    return Math.floor(Math.random() * 100)
  });
  return (
    <Layout>
      <Row justifyContent="center" direction="column">
        {edges.map((item, index) => {
          const { title, imgSrc, markdown } = item.node;
          const randomSrc = `${imgSrc}?=sig${randomImg[index]}`;
          console.log(randomSrc);
          return (
            <Card title={title} imgSrc={randomSrc} markdown={markdown} key={index} />
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

// export const pageQuery = graphql`
//   query BlogPosts {
//     allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             title
//             imgSrc
//           }
//           html
//         }
//       }
//     }
//   }
// `;

export default IndexPage;
