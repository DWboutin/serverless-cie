import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, FormattedMessage } from 'react-intl'
import { Grid, Row, Col, Button, Logo, Card } from 'conecto-ui-components'

import ContractorDude from './svg/ContractorDude'

import { Link } from '../i18n'
import SwitchLanguage from './SwitchLanguage'

const LayoutSignIn = ({ children, intl }) => (
  <Grid id="layoutSignIn-section">
    <Row className="notAContractor">
      <Col
        xs={{
          span: 7,
          start: true,
        }}
        sm={{
          span: 8,
          start: true,
        }}
        md={{
          span: 5,
          start: true,
        }}
      >
        <Button
          type="bordered"
          comp="a"
          href={process.env.ROOFING_SITE_URL}
          target="_blank"
          rel="noopener"
        >
          {intl.formatMessage({ id: 'notAContrator' })}
        </Button>
      </Col>
      <Col
        xs={{
          span: 5,
          end: true,
        }}
        sm={{
          span: 4,
          end: true,
        }}
        md={{
          span: 7,
          end: true,
        }}
      >
        <SwitchLanguage />
      </Col>
    </Row>
    <Row
      xs={{
        alignement: 'middle',
      }}
      sm={{
        alignement: 'middle',
      }}
      md={{
        alignement: 'top',
      }}
      lg={{
        alignement: 'top',
      }}
      xl={{
        alignement: 'top',
      }}
      className="content-row"
    >
      <Col
        xs={{
          hidden: true,
        }}
        sm={{
          hidden: true,
        }}
        md={{
          span: 4,
        }}
        lg={{
          span: 6,
        }}
        xl={{
          span: 7,
        }}
        className="console-image"
      >
        <ContractorDude />
      </Col>
      <Col
        xs={{
          span: 12,
        }}
        sm={{
          span: 10,
        }}
        md={{
          span: 8,
        }}
        lg={{
          span: 6,
        }}
        xl={{
          span: 5,
        }}
        className="content-col"
      >
        <div className="content">
          <div className="logo-wrap">
            <Link to="/">
              <Logo suffix={intl.formatMessage({ id: 'contractor' })} />
            </Link>
          </div>
          {children}
        </div>
      </Col>
    </Row>
  </Grid>
)

LayoutSignIn.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(LayoutSignIn)
