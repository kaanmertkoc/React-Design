import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Sketch from "../images/logo-sketch.png"
import Figma from "../images/logo-figma.png"
import Framer from "../images/logo-framer.png"
import Studio from "../images/logo-studio.png"
import ReactLogo from "../images/logo-react.png"
import ReactLogoSvg from "../images/logo-react-svg.png"
import Swift from "../images/logo-swift.png"
import Wallpaper1 from "../images/wallpaper.jpg"
import Wallpaper2 from "../images/wallpaper2.jpg"
import Wallpaper3 from "../images/wallpaper3.jpg"
import Wallpaper4 from "../images/wallpaper4.jpg"

import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"
import staticdata from "../../staticdata.json"
import Cell from "../components/Cell"
import styled from "styled-components"

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Learn to <br /> design and code React apps
        </h1>
        <p>
          Complete courses about the best tools and design systems. Prototype
          and build apps with React and Swift. Now go build something great.
        </p>

        <a>Watch the video</a>
        <div className="logos">
          <img src={Sketch} width="50" />
          <img src={Figma} width="50" />
          <img src={Studio} width="50" />
          <img src={Framer} width="50" />
          <img src={ReactLogo} width="50" />
          <img src={Swift} width="50" />
        </div>
        <Wave />
      </div>
      <div className="Cards">
        <h2>11 courses, more coming</h2>
        <div className="CardGroup">
          <Card
            title="React for Designers"
            text="12 sections"
            image={Wallpaper1}
          />
          <Card
            title="React for Designers"
            text="12 sections"
            image={Wallpaper2}
          />
          <Card
            title="React for Designers"
            text="12 sections"
            image={Wallpaper3}
          />
          <Card
            title="React for Designers"
            text="12 sections"
            image={Wallpaper4}
          />
        </div>
      </div>
      <Section
        image={Wallpaper2}
        logo={ReactLogo}
        title="React for Designers"
        text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netifly."
      />
      <SectionCaption
        style={{
          color: "#94a4ba",
        }}
      >
        12 sections - 6 hours
      </SectionCaption>
      <SectionCellGroup>
        {staticdata.cells.map(cell => (
          <Cell title={cell.title} image={ReactLogoSvg} />
        ))}
      </SectionCellGroup>
    </div>
  </Layout>
)

export default IndexPage
