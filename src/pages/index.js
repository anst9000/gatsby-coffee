import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  FaGulp
} from 'react-icons/fa';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Andy's Cafe</h1>
    <p>Why not sit down and have a cup of fresh new coffee?</p>
    <FaGulp />
  </Layout>
)

export default IndexPage

