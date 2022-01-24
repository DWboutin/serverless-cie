/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import { Link } from 'gatsby'
import { FormattedMessage, injectIntl } from 'react-intl'
import { Grid, Row, Col, SVG, Button, CTACard } from 'conecto-ui-components'

const CTASection = ({ intl, ...props }) => (
  <Grid className="cta-section" {...props}>
    <Row
      xs={{
        alignement: 'center',
      }}
      sm={{
        alignement: 'center',
      }}
      md={{
        alignement: 'center',
      }}
      lg={{
        alignement: 'center',
      }}
      xl={{
        alignement: 'center',
      }}
    >
      <Col
        xs={{
          span: 12,
        }}
        sm={{
          span: 10,
        }}
        md={{
          span: 10,
        }}
        lg={{
          span: 10,
        }}
        xl={{
          span: 8,
        }}
      >
        <CTACard
          button={
            <Button comp={Link} to="/" type="roofing">
              {intl.formatMessage({ id: 'ctaSection_button' })}
            </Button>
          }
          image={<SVG.RoofingCTA />}
        >
          <FormattedMessage id="ctaSection_title" tagName="h2" />
          <FormattedMessage id="ctaSection_text" tagName="p" />
        </CTACard>
      </Col>
    </Row>
  </Grid>
)

CTASection.propTypes = {}

export default injectIntl(CTASection)
