import React from 'react'
import { FormattedMessage } from 'react-intl'

import Grid, { Row, Col } from '../_components/Grid'
import Logo from '../_components/Logo'
import Button from '../_components/Button'
import CheckPoint, { PhoneDisplay } from '../_components/Display'
import { RoofingPhoneBg } from '../_components/SVG'

const Tags = () => (
  <Grid>
    <Row>
      <Col>
        <h2 style={{ opacity: 0.7 }}>Display</h2>
      </Col>
    </Row>
    <Row>
      <Col>
        <h3 style={{ opacity: 0.6 }}>CheckPoint</h3>
        <CheckPoint>This is a CheckPoint display</CheckPoint>
      </Col>
    </Row>
    <Row>
      <Col>
        <h3 style={{ opacity: 0.6 }}>Phone Display</h3>
        <PhoneDisplay
          logo={
            <Logo
              type="roofing"
              suffix={<FormattedMessage id="contractor" />}
            />
          }
          button={<Button type="bordered">question@contect.ca</Button>}
          bottomSvgComponent={<RoofingPhoneBg />}
        >
          test
        </PhoneDisplay>
      </Col>
    </Row>
  </Grid>
)

Tags.defaultProps = {}

export default Tags
