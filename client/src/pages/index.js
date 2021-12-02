import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Block from "@sanity/block-content-to-react"

// Components
import Layout from '../components/Layout'

// Styles
import * as styles from '../styles/modules/Home.module.scss'

const Home = ({ data }) => {
  console.log(data)

  const { featuredImage, headline, subhead } = data.allSanityHomepage.nodes[0].homepageContent
  const featImg = getImage(featuredImage)

  return (
    <Layout header footer>
      <h1>hello</h1>
      <h2>how are you</h2>
    </Layout>
  )
}

export const query = graphql`
  {
    allSanityHomepage {
      nodes {
        homepageContent {
          headline
          featuredImage {
            asset {
              gatsbyImageData
            }
          }
          subhead {
            _rawData
          }
        }
      }
    }
  }
`

export default Home

