import React from 'react'
import Svg, { Path } from 'svgs'

const ThreeDots = ({ style }) => (
  <Svg width="25px" height="25px" viewBox="0 0 128 512" style={style}>
    <Path
      fill="currentColor"
      d="M64 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM16 104c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48zm0 304c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z"
    />
  </Svg>
)

export default ThreeDots
