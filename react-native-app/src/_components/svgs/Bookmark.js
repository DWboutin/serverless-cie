import React from 'react'
import Svg, { Path } from 'svgs'

const Bookmark = ({ width, height, color }) => (
  <Svg width={width} height={height} viewBox="0 0 10 13">
    <Path
      d="M4.42888504,10.69056 L1.51805315,12.8144731 C0.891673597,13.2691124 0,12.8357787 0,12.0828613 L0,1.42067744 C0,0.639303765 0.663226865,0 1.47383998,0 L8.52615253,0 C9.33676489,0 10,0.639303765 10,1.42067744 L10,12.0828613 C10,12.8357787 9.10831891,13.2620346 8.48194685,12.8073953 L5.57110746,10.6834822 C5.23212479,10.4419709 4.76786771,10.4419709 4.42888504,10.69056 Z"
      fill={color}
    />
  </Svg>
)

Bookmark.defaultProps = {
  width: '18px',
  height: '18px',
  color: '#572D2D',
}

export default Bookmark
