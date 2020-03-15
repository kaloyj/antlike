import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"

export const COLOR_SCHEME = {
  accent: "#D7263D",
  darkRed: "#990033",
  fontColor: "#211103",
  lightYellow: "#EEEFA8",
}

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          html,
          body {
            margin: 0;
            font-family: "DM Sans", -apple-system, BlinkMacSystemFont, Roboto,
              Helvetica, sans-serif;
            font-size: 18px;
            line-height: 1.4;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: ${COLOR_SCHEME.fontColor};
            line-height: 1.1;
          }

          .d-flex {
            display: flex;
            flex-flow: row wrap;

            &.column {
              flex-direction: column;
            }

            &.no-wrap {
              flex-wrap: nowrap;
            }
          }

          .f-100 {
            flex: 0 0 100%;
          }

          .f-92 {
            flex: 0 0 92%;
          }
        `}
      ></Global>

      <main
        className="d-flex"
        css={css`
          width: 100vw;
          min-height: 100vh;
          overflow-x: hidden;
        `}
      >
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
