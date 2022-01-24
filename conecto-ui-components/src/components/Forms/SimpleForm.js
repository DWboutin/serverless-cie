import React from 'react'
import { withFormik } from 'formik'

import Grid, { Row, Col } from '../../_components/Grid'
import { DropdownChoice } from '../../_components/Input'
import Button from '../../_components/Button'
import TextField from '../Forms/TextField'
import CheckboxField from '../Forms/CheckboxField'
import SwitchField from '../Forms/SwitchField'
import DropdownField from '../Forms/DropdownField'
import AddressAutocompleteField from '../Forms/AddressAutocompleteField'

class SimpleForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit} action="#" method="get">
        <Row>
          <Col>
            <h2 style={{ opacity: 0.7 }}>Formik form</h2>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{
              span: 6,
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
            <h3 style={{ opacity: 0.6 }}>Text field</h3>
            <TextField
              id="testField"
              name="testField"
              type="text"
              label="Test label"
            />
          </Col>
          <Col
            xs={{
              span: 6,
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
            <h3 style={{ opacity: 0.6 }}>Checkbox</h3>
            <CheckboxField id="testField2" name="testField2" label="Test 123" />
          </Col>
          <Col
            xs={{
              span: 6,
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
            <h3 style={{ opacity: 0.6 }}>Switch</h3>
            <SwitchField id="testField3" name="testField3" label="Test 123" />
          </Col>
          <Col
            xs={{
              span: 6,
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
            <h3 style={{ opacity: 0.6 }}>Dropdown list</h3>
            <DropdownField id="testField4" name="testField4" label="Test 123">
              <DropdownChoice value="Test 1">Test label 1</DropdownChoice>
              <DropdownChoice value="Test 2">Test label 2</DropdownChoice>
              <DropdownChoice value="Test 3">
                Test label 3 with a very long text in more lines
              </DropdownChoice>
              <DropdownChoice value="Test 2">Test label 4</DropdownChoice>
            </DropdownField>
          </Col>
          <Col
            xs={{
              span: 6,
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
            <h3 style={{ opacity: 0.6 }}>Address</h3>
            <AddressAutocompleteField
              id="autoTestField5"
              name="companyAddressAuto"
              type="text"
              label="Test 123"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button htmlType="submit">submit</Button>
          </Col>
        </Row>
      </form>
    )
  }
}

const SimpleFormik = withFormik({
  mapPropsToValues: () => ({
    testField: '',
    testField2: true,
    testField3: true,
    testField4: 'Test 2',
    companyAddressAuto: '',
  }),

  handleSubmit: (values, { props, resetForm }) => {
    resetForm()
  },

  displayName: 'simpleForm',
})(SimpleForm)

SimpleFormik.defaultProps = {
  siteTitle: '',
}

export default SimpleFormik
