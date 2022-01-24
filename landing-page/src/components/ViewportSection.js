import React from 'react'
import { FormattedHTMLMessage, injectIntl } from 'react-intl'
import { Grid, Row, Col, CheckPoint, Button } from 'conecto-ui-components'

import QuoteRequestForm from './QuoteRequestForm'

const ViewportSection = ({ intl, locale }) => (
  <div id="viewport-section-bg">
    <Grid id="viewport-section" fullHeight>
      <Row>
        <Col
          xs={{
            span: 12,
          }}
          sm={{
            span: 12,
          }}
          md={{
            span: 12,
          }}
          lg={{
            span: 6,
          }}
          xl={{
            span: 7,
          }}
        >
          <div className="text-content">
            <h1>
              <FormattedHTMLMessage id="pageTitle" />
            </h1>
            <div>
              <CheckPoint>{intl.formatMessage({ id: 'checkpoint1' })}</CheckPoint>
            </div>
            <div>
              <CheckPoint>{intl.formatMessage({ id: 'checkpoint2' })}</CheckPoint>
            </div>
            <div>
              <CheckPoint>{intl.formatMessage({ id: 'checkpoint3' })}</CheckPoint>
            </div>
          </div>
        </Col>
        <Col
          xs={{
            span: 12,
          }}
          sm={{
            span: 12,
          }}
          md={{
            span: 12,
          }}
          lg={{
            span: 6,
          }}
          xl={{
            span: 5,
          }}
          className="form-col"
        >
          <div className="form-container">
            <QuoteRequestForm locale={locale} />
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
)

ViewportSection.propTypes = {}

export default injectIntl(ViewportSection)
