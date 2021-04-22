import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Learn to design and code React Apps</h1>
    <p>
      Complete courses about the best tools and design systems. Prototype and
      build apps with React and Swift. Now go build something great.
    </p>
  </Layout>
)

export default IndexPage
