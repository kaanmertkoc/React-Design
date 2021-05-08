import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "../components/Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query siteTitleQueryAndSiteTitleQueryAndSiteTitleQueryAndSiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }

      allContentfulTitle {
        edges {
          node {
            title
            url
          }
        }
      }
    }
  `)

  return (
    <>
      <Header />

      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
