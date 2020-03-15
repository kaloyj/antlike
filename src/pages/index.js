import React from "react"
import { css } from "@emotion/core"
import Layout, { COLOR_SCHEME } from "../components/layout"
import SEO from "../components/seo"
import Ant from "./assets/ant.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* landing */}
    <div
      className="d-flex f-92"
      css={css`
        margin-left: 4%;
        padding: 1.75rem 0;
        align-items: center;
        flex-flow: column wrap;

        @media only screen and (min-width: 768px) {
        }

        @media screen and (min-width: 1024px) {
          margin-top: 2rem;
          align-items: flex-start;
          flex-flow: row wrap;
          align-content: flex-start;
        }
      `}
    >
      {/* title */}
      <h1
        css={css`
          flex-shrink: 1;
          font-size: 2.25rem;

          @media screen and (min-width: 1024px) {
            font-size: 3rem;
            flex: 1 0 100%;
            order: 0;
          }
        `}
      >
        antlike
      </h1>

      {/* body */}
      <div
        className="d-flex"
        css={css`
          flex: 0 0 90%;
          width: 100%;

          @media only screen and (min-width: 321px) {
            margin-top: 2.5%;
          }

          @media only screen and (min-width: 1024px) {
            align-items: center;
            justify-content: space-between;
            flex: 0 0 100%;
            margin-top: 4rem;
          }

          @media screen and (min-width: 1200px) {
            margin-top: 1rem;
          }
        `}
      >
        <div
          className="d-flex"
          css={css`
            flex: 0 0 100%;
            height: 60%;

            @media only screen and (min-width: 768px) {
              width: 75%;
            }

            @media screen and (min-width: 1024px) {
              flex: 0 0 60%;
              order: 2;
            }

            @media screen and (min-width: 1200px) {
              flex: 0 0 40%;
              margin-right: 4%;
            }

            @media screen and (min-width: 1920px) {
              flex: 0 0 50%;
            }
          `}
        >
          <Ant></Ant>
        </div>

        <div
          className="d-flex"
          css={css`
            flex: 0 0 100%;
            height: 30%;
            justify-content: center;

            @media screen and (min-width: 1024px) {
              flex: 0 0 40%;
              order: 1;
              justify-content: flex-start;
            }

            @media screen and (min-width: 1200px) {
              flex: 0 0 35%;
            }

            @media screen and (min-width: 1920px) {
              flex: 0 0 25%;
            }
          `}
        >
          <h3
            css={css`
              flex: 0 0 90%;
              text-align: center;
              font-weight: 500;
              font-size: 1.35rem;
              width: 90%;
              @media only screen and (min-width: 768px) {
                flex: 0 0 70%;
                font-size: 2rem;
              }

              @media screen and (min-width: 1024px) {
                flex: 0 0 100%;
                text-align: left;
              }
            `}
          >
            Instantly decide between food choices near you
          </h3>

          <button
            css={css`
              flex: 0 0 50%;
              height: 2rem;
              border-radius: 75px;
              border: none;
              background-color: ${COLOR_SCHEME.accent};
              color: white;
              font-size: 0.9rem;
              letter-spacing: 0.125rem;
              font-weight: 700;
              margin-top: 2rem;
              -webkit-box-shadow: -15px 14px 39px -13px rgba(215, 38, 62, 1),
                -4px 4px 4px -4px rgba(215, 38, 62, 1);
              -moz-box-shadow: -15px 14px 39px -13px rgba(215, 38, 62, 1),
                -4px 4px 4px -4px rgba(215, 38, 62, 1);
              box-shadow: -15px 14px 39px -13px rgba(215, 38, 62, 1),
                -4px 4px 4px -4px rgba(215, 38, 62, 1);

              @media only screen and (min-width: 321px) {
                height: 3rem;
                font-size: 1.075rem;
              }

              @media only screen and (min-width: 768px) {
                font-size: 1.5rem;
                margin-top: 4rem;
                height: 4rem;
              }

              @media screen and (min-width: 1024px) {
                flex: 0 0 80%;
              }

              @media screen and (min-width: 1200px) {
                flex: 0 0 45%;
                height: 3rem;
                font-size: 1.25rem;
              }
            `}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
