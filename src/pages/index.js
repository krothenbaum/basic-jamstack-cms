import React from 'react'
import Link from 'gatsby-link'
import { Column, Row } from 'react-rasta'
import Card from '../components/Card'

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Row justifyContent="center" direction="column">
      {edges.map((item, index) => {
        console.log(item.node)
        return (
          <Card
            title={item.node.frontmatter.title}
            imgSrc={item.node.frontmatter.imgSrc}
            html={item.node.html}
            key={index}
          />
        )
      })}
      {/* <Card title="Hi people" body="Welcome to your new Gatsby site. Now go build something great." imgSrc="https://source.unsplash.com/random/200x200"/>
    <Card title="Sup FuckFace" body="Still Here? Great, keep working." imgSrc="https://source.unsplash.com/random/200x200"/> */}
    </Row>
  )
}

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
`

export default IndexPage
