import React from 'react'
import { Row, Col } from 'conecto-ui-components'

import AddressCard from './AddressesDisplay/AddressCard'
import PropTypes from 'prop-types'

const AddressesDisplay = ({
  addresses,
  employeesNameBySub,
  refreshAddresses,
}) => (
  <Row className="addresses-display">
    {addresses.map(address => (
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
        key={address.addressId}
      >
        <AddressCard
          id={address.addressId}
          number={address.number}
          address={address.address}
          postalCode={address.postal_code}
          city={address.city}
          state={address.state}
          radius={address.radius}
          createdAt={address.createdAt}
          assigned={address.assigned}
          userId={address.userId}
          employeesNameBySub={employeesNameBySub}
          refreshAddresses={refreshAddresses}
        />
      </Col>
    ))}
  </Row>
)

AddressesDisplay.propTypes = {}

AddressesDisplay.defaultProps = {
  addresses: [],
  refreshAddresses: PropTypes.func.isRequired,
}

export default AddressesDisplay
