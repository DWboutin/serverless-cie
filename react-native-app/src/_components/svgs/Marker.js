import React from 'react'
import Svg, { Path } from 'svgs'

const Marker = ({ width, height, color, style }) => (
  <Svg width={width} height={height} viewBox="0 0 11 15" style={style}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.5 14.3C5.5 14.3 11 8.07188 11 5.2C11 2.32812 8.53757 0 5.5 0C2.46243 0 0 2.32812 0 5.2C0 8.07188 5.5 14.3 5.5 14.3ZM5.4998 7.69999C6.71483 7.69999 7.6998 6.71501 7.6998 5.49999C7.6998 4.28496 6.71483 3.29999 5.4998 3.29999C4.28478 3.29999 3.2998 4.28496 3.2998 5.49999C3.2998 6.71501 4.28478 7.69999 5.4998 7.69999Z"
      fill={color}
    />
  </Svg>
)

Marker.defaultProps = {
  width: '11px',
  height: '15px',
  color: '#572D2D',
}

export default Marker
