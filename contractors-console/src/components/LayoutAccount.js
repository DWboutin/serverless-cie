import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Grid } from 'conecto-ui-components'

import AccountSideMenu from './LayoutAccount/AccountSideMenu'

const LayoutAccount = ({ children, pathname }) => (
  <Grid id="account-layout">
    <Row>
      <Col
        xl={{
          span: 3,
        }}
        lg={{
          span: 3,
        }}
        md={{
          span: 4,
        }}
        sm={{
          span: 12,
        }}
        xs={{
          span: 12,
        }}
      >
        <AccountSideMenu pathname={pathname} />
      </Col>
      <Col>{children}</Col>
    </Row>
  </Grid>
)

LayoutAccount.propTypes = {
  children: PropTypes.node.isRequired,
}

LayoutAccount.defaultProps = {
  pathname: '',
}

export default LayoutAccount
