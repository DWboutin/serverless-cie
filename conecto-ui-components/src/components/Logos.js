import React from 'react'
import { FormattedMessage } from 'react-intl'

import Grid, { Row, Col } from '../_components/Grid'
import Logo from '../_components/Logo'
import Icon from '../_components/Icon'
import { Link } from '../i18n'

const Buttons = () => (
  <Grid>
    <Row>
      <Col>
        <h2 style={{ opacity: 0.7 }}>Logos</h2>
      </Col>
    </Row>
    <Row>
      <Col>
        <h3 style={{ opacity: 0.6 }}>Sizes</h3>
      </Col>
    </Row>
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
          span: 4,
        }}
        xl={{
          span: 4,
        }}
      >
        <h4 style={{ opacity: 0.5 }}>Simple (default) logo</h4>
        <Logo type="roofing" suffix={'Service'} />
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
          span: 4,
        }}
        xl={{
          span: 4,
        }}
      >
        <h4 style={{ opacity: 0.5 }}>Short logo</h4>
        <Logo size="short" />
      </Col>
    </Row>
    <Row>
      <Col>
        <h3 style={{ opacity: 0.6 }}>Avec suffixes</h3>
      </Col>
    </Row>
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
          span: 4,
        }}
        xl={{
          span: 4,
        }}
      >
        <h4 style={{ opacity: 0.5 }}>Suffixe en texte</h4>
        <Logo suffix="Test" />
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
          span: 4,
        }}
        xl={{
          span: 4,
        }}
      >
        <h4 style={{ opacity: 0.5 }}>Suffixe component react-intl</h4>
        <Logo suffix={<FormattedMessage id="contractor" />} />
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
          span: 4,
        }}
        xl={{
          span: 4,
        }}
      >
        <h4 style={{ opacity: 0.5 }}>Espace restreint</h4>
        <div style={{ width: '220px' }}>
          <Logo suffix={<FormattedMessage id="contractor" />} />
        </div>
      </Col>
    </Row>
  </Grid>
)

Buttons.defaultProps = {
  siteTitle: '',
}

export default Buttons
