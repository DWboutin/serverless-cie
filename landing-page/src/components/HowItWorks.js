/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Grid, Row, Col, Icon, Card, CardsSwiper } from 'conecto-ui-components'

const HowItWorks = props => (
  <div id="how-it-works">
    <Grid>
      <Row>
        <Col>
          <FormattedMessage id="howItWorks" tagName="h2" />
        </Col>
      </Row>
      <Row className="cards-row">
        <Col>
          <CardsSwiper id="how-it-works-swiper" withIcons>
            <Card withIcon icon={<Icon type="colored-flag" />}>
              <FormattedMessage id="howItWorksCard1_title" tagName="h3" />
              <FormattedMessage id="howItWorksCard1_text" tagName="p" />
            </Card>
            <Card withIcon icon={<Icon type="colored-flag" />}>
              <FormattedMessage id="howItWorksCard2_title" tagName="h3" />
              <FormattedMessage id="howItWorksCard2_text" tagName="p" />
            </Card>
            <Card withIcon icon={<Icon type="colored-flag" />}>
              <FormattedMessage id="howItWorksCard3_title" tagName="h3" />
              <FormattedMessage id="howItWorksCard3_text" tagName="p" />
            </Card>
          </CardsSwiper>
        </Col>
      </Row>
    </Grid>
  </div>
)

HowItWorks.propTypes = {}

export default HowItWorks
