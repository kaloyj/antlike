import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* landing */}
    <div
      className="d-flex f-92"
      css={css`
        margin-left: 4%;
        justify-content: center;
        margin-top: 1.5rem;
        border: 3px solid blue;

        @media only screen and (min-width: 768px) {
        }

        @media screen and (min-width: 1024px) {
          margin-top: 2rem;
          justify-content: flex-start;
        }
      `}
    >
      <h1
        css={css`
          font-size: 2.25rem;

          @media screen and (min-width: 1024px) {
            font-size: 3rem;
          }
        `}
      >
        antlike
      </h1>
    </div>
  </Layout>
)

export default IndexPage
