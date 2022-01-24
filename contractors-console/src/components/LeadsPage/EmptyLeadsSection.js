import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Col, Row } from 'conecto-ui-components'

import EmptyLeads from '../svg/EmptyLeads'

const EmptyLeadsSection = () => (
  <Row
    xl={{
      alignement: 'center',
    }}
    lg={{
      alignement: 'center',
    }}
    md={{
      alignement: 'center',
    }}
    sm={{
      alignement: 'center',
    }}
    xs={{
      alignement: 'center',
    }}
  >
    <Col className="empty-placeholder">
      <EmptyLeads />
      <Row
        xl={{
          alignement: 'center',
        }}
        lg={{
          alignement: 'center',
        }}
        md={{
          alignement: 'center',
        }}
        sm={{
          alignement: 'center',
        }}
        xs={{
          alignement: 'center',
        }}
      >
        <Col
          xl={{
            span: 6,
          }}
          lg={{
            span: 6,
          }}
          md={{
            span: 8,
          }}
          sm={{
            span: 12,
          }}
          xs={{
            span: 12,
          }}
        >
          <FormattedMessage id="lead_empty_section_title" tagName="h1" />
          <FormattedMessage id="lead_empty_section_text" tagName="p" />
        </Col>
      </Row>
    </Col>
  </Row>
)

export default EmptyLeadsSection
