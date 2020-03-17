import React from "react"
import { css } from "@emotion/core"
import Map from "./map"

const FoodSearch = () => {
  return (
    <div
      css={css`
        width: 100%;
        height: 100vh;
        border: 3px solid black;
      `}
    >
      i am a food search
      <Map></Map>
    </div>
  )
}

export default FoodSearch
