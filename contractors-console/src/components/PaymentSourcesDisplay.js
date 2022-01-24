import React from 'react'
import { Row, Col } from 'conecto-ui-components'

import PaymentSourceCard from './PaymentSourcesDisplay/PaymentSourceCard'

const PaymentSourcesDisplay = ({ sources, defaultSource, refreshContact }) => (
  <Row className="payment-sources-display">
    {sources.map(source => (
      <Col
        xl={{
          span: 6,
        }}
        lg={{
          span: 12,
        }}
        md={{
          span: 12,
        }}
        sm={{
          span: 12,
        }}
        xs={{
          span: 12,
        }}
        key={source.id}
      >
        <PaymentSourceCard
          isDefault={source.id === defaultSource}
          id={source.id}
          brand={source.card.brand}
          created={parseInt(`${source.created}000`)}
          last4={source.card.last4}
          exp={`${source.card.exp_month}/${source.card.exp_year}`}
          refreshContact={refreshContact}
        />
      </Col>
    ))}
  </Row>
)

PaymentSourcesDisplay.propTypes = {}

PaymentSourcesDisplay.defaultProps = {
  sources: [],
}

export default PaymentSourcesDisplay
