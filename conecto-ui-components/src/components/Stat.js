import React from 'react'

import Grid, { Row, Col } from '../_components/Grid'
import Icon from '../_components/Icon'
import StatCircle, { StatSonar, StatTwoNumbers } from '../_components/Stat'

const Stat = () => (
  <Grid>
    <Row>
      <Col>
        <h2 style={{ opacity: 0.7 }}>Stat</h2>
      </Col>
    </Row>
    <Row>
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
          span: 4,
        }}
        xl={{
          span: 4,
        }}
      >
        <h3 style={{ opacity: 0.6, marginBottom: '40px' }}>Stat Circle</h3>
        <StatCircle
          icon={<Icon type="notification" />}
          title="Taux d'accceptation"
          notice="+ 6.5% / mois précédent"
          number={66}
        />
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
          span: 4,
        }}
        xl={{
          span: 4,
        }}
      >
        <h3 style={{ opacity: 0.6, marginBottom: '40px' }}>Stat Two Numbers</h3>
        <StatTwoNumbers
          icon={<Icon type="notification" />}
          title="Taux d'accceptation"
          notice="+ 6.5% / mois précédent"
          number1={45}
          suffix1="%"
          disabled1
          notice1="Courriel"
          number2={66}
          suffix2="h"
          notice2="Téléphone"
        />
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
          span: 4,
        }}
        xl={{
          span: 4,
        }}
      >
        <h3 style={{ opacity: 0.6, marginBottom: '40px' }}>Stat Sonar</h3>
        <StatSonar
          icon={<Icon type="notification" />}
          title="Taux d'accceptation"
          notice="+ 6.5% / mois précédent"
          number={60}
          suffix="h"
        />
      </Col>
    </Row>
  </Grid>
)

Stat.defaultProps = {}

export default Stat
