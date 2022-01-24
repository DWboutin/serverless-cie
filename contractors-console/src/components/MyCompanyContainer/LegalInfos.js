import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import { Row, Col, Card } from 'conecto-ui-components'

const LegalInfos = ({ intl, RBQ, NEQ, TPS, TVQ }) => (
  <Card id="myCompany-legalInfos-card">
    <Row>
      <Col>
        <FormattedMessage id="account_myCompanyForm_legalTitle" tagName="h2" />
        <FormattedMessage id="account_myCompanyForm_legalText" tagName="p" />
      </Col>
    </Row>
    <Row className="legal-info">
      <Col
        xl={{
          span: 2,
        }}
        lg={{
          span: 3,
        }}
        md={{
          span: 4,
        }}
        sm={{
          span: 3,
        }}
        xs={{
          span: 4,
        }}
        className="legal-label"
      >
        <FormattedMessage id="signUp_form_labelRBQ" />
      </Col>
      <Col
        xl={{
          span: 10,
        }}
        lg={{
          span: 9,
        }}
        md={{
          span: 8,
        }}
        sm={{
          span: 9,
        }}
        xs={{
          span: 8,
        }}
      >
        {RBQ}
      </Col>
    </Row>
    <Row className="legal-info">
      <Col
        xl={{
          span: 2,
        }}
        lg={{
          span: 3,
        }}
        md={{
          span: 4,
        }}
        sm={{
          span: 3,
        }}
        xs={{
          span: 4,
        }}
        className="legal-label"
      >
        <FormattedMessage id="signUp_form_labelNEQ" />
      </Col>
      <Col
        xl={{
          span: 10,
        }}
        lg={{
          span: 9,
        }}
        md={{
          span: 8,
        }}
        sm={{
          span: 9,
        }}
        xs={{
          span: 8,
        }}
      >
        {NEQ}
      </Col>
    </Row>
  </Card>
)

LegalInfos.propTypes = {}

export default injectIntl(LegalInfos)
