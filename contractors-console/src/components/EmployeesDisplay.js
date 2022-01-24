import React from 'react'
import { Row, Col } from 'conecto-ui-components'

import EmployeeCard from './EmployeesDisplay/EmployeeCard'
import PropTypes from 'prop-types'

const EmployeesDisplay = ({
  isAdmin,
  companyOwner,
  userIsOwner,
  employees,
  refreshEmployees,
  refreshContact,
  handleLogout,
}) => (
  <Row className="employees-display">
    {employees.map(employee => (
      <Col
        className="employee-card-col"
        xl={{
          span: 12,
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
        key={employee.id}
      >
        <EmployeeCard
          id={employee.id}
          currentUserIsAdmin={isAdmin}
          currentUserIsOwner={
            employee.custom_fields.cognitoSub === companyOwner
          }
          isCurrentUser={employee.isCurrentUser}
          userIsOwner={userIsOwner}
          isOwner={userIsOwner}
          firstName={employee.first_name}
          lastName={employee.last_name}
          email={employee.email}
          activeForRoofing={employee.custom_fields.activeForRoofing}
          isAdmin={employee.custom_fields.isAdmin === '1'}
          createdAt={employee.created_at}
          refreshEmployees={refreshEmployees}
          refreshContact={refreshContact}
          handleLogout={handleLogout}
        />
      </Col>
    ))}
  </Row>
)

EmployeesDisplay.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  employees: PropTypes.array.isRequired,
  refreshEmployees: PropTypes.func.isRequired,
}

EmployeesDisplay.defaultProps = {
  employees: [],
}

export default EmployeesDisplay
