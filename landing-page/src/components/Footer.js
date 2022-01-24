import React from 'react'
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl'
import { Grid, Row, Col, Logo, Icon, Button } from 'conecto-ui-components'

import { Link } from '../i18n'

const Footer = props => (
  <div className="footer" {...props}>
    <Grid>
      <Row>
        <Col
          xs={{
            span: 12,
          }}
          sm={{
            span: 6,
          }}
          md={{
            span: 4,
          }}
          lg={{
            span: 3,
          }}
          xl={{
            span: 3,
          }}
          className="logo-section"
        >
          <div>
            <Link to="/" className="logo">
              <Logo type="roofing" suffix={<FormattedMessage id="roofing" />} />
            </Link>
          </div>
          <Button
            type="bordered"
            comp="a"
            href={process.env.CONTRACTOR_URL}
            target="_blank"
            rel="noopener"
            className="contractor-btn"
          >
            <div className="circle">
              <Icon type="colored-flag" />
            </div>
            <FormattedMessage id="contractors" />
          </Button>
        </Col>
        <Col
          xs={{
            span: 12,
          }}
          sm={{
            span: 6,
          }}
          md={{
            span: 4,
          }}
          lg={{
            span: 3,
          }}
          xl={{
            span: 3,
          }}
        >
          <FormattedMessage id="footerSections_title" tagName="h2" />
          <ul className="section-links">
            <li>
              <a href="#how-it-works">
                <FormattedMessage id="howItWorks" />
              </a>
            </li>
            <li>
              <a href="#materials">
                <FormattedMessage id="roofingTypes" />
              </a>
            </li>
            <li>
              <a href="#made-with-conecto">
                <FormattedMessage id="madeWithConecto" />
              </a>
            </li>
          </ul>
        </Col>
        <Col
          xs={{
            span: 12,
          }}
          sm={{
            span: 6,
          }}
          md={{
            span: 4,
          }}
          lg={{
            span: 3,
          }}
          xl={{
            span: 3,
          }}
        >
          <FormattedMessage id="footerSections_legal" tagName="h2" />
          <ul className="section-links">
            <li>
              <Link to="/terms-of-service">
                <FormattedMessage id="termsOfService" />
              </Link>
            </li>
          </ul>
        </Col>
        <Col
          xs={{
            span: 12,
          }}
          sm={{
            span: 12,
          }}
          md={{
            span: 4,
          }}
          lg={{
            span: 3,
          }}
          xl={{
            span: 3,
          }}
        >
          <FormattedMessage id="footerContact_title" tagName="h2" />
          <Button
            type="bordered"
            comp="a"
            href="mailto:questions@conecto.ca"
            rel="noopener"
          >
            questions@conecto.ca
          </Button>
          <div className="copyright">
            <FormattedHTMLMessage id="copyright" />
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
)

Footer.propTypes = {}

export default Footer
