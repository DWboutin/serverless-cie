import React from 'react'
import { FormattedMessage } from 'react-intl'

import Grid, { Row, Col } from '../_components/Grid'
import Input, {
  TextArea,
  Label,
  Checkbox,
  CheckboxGroup,
  Switch,
  DropdownList,
  DropdownChoice,
  AddressAutocomplete,
} from '../_components/Input'
import SimpleForm from '../components/Forms/SimpleForm'

const Buttons = () => (
  <Grid>
    <Row>
      <Col>
        <h2 style={{ opacity: 0.7 }}>Forms</h2>
      </Col>
    </Row>
    <Row>
      <Col>
        <SimpleForm />
      </Col>
    </Row>
    <Row>
      <Col>
        <h2 style={{ opacity: 0.7 }}>Form components</h2>
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
        <h4 style={{ opacity: 0.5 }}>Input field</h4>
        <Input
          id="testField2"
          name="testField2"
          type="text"
          label={<FormattedMessage id="roofing" />}
          error={<FormattedMessage id="roofing" />}
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
        <h4 style={{ opacity: 0.5 }}>TextArea field</h4>
        <TextArea
          id="testFieldTextArea3"
          name="testFieldTextArea3"
          type="text"
          label={<FormattedMessage id="roofing" />}
          error={<FormattedMessage id="roofing" />}
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
        <h4 style={{ opacity: 0.5 }}>DropdownList</h4>
        <DropdownList
          id="testField10"
          name="testField10"
          label="Dropdown list"
          error={'Test'}
        >
          <DropdownChoice value="value 1">Value 1</DropdownChoice>
          <DropdownChoice value="value 2">Value 2</DropdownChoice>
          <DropdownChoice value="value 3">Value 3</DropdownChoice>
        </DropdownList>
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
        <h4 style={{ opacity: 0.5 }}>Checkbox</h4>
        <h5 style={{ opacity: 0.4 }}>Normal</h5>
        <Checkbox
          id="testField3"
          name="testField3"
          label={<FormattedMessage id="roofing" />}
        />
        <h5 style={{ opacity: 0.4 }}>Focused</h5>
        <Checkbox
          id="testField4"
          name="testField4"
          label={<FormattedMessage id="roofing" />}
          focused
        />
        <h5 style={{ opacity: 0.4 }}>Checked</h5>
        <Checkbox
          id="testField5"
          name="testField5"
          label={<FormattedMessage id="roofing" />}
          checked
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
        <h4 style={{ opacity: 0.5 }}>Switch</h4>
        <h5 style={{ opacity: 0.4 }}>Normal</h5>
        <Switch
          id="testField6"
          name="testField6"
          label={<FormattedMessage id="roofing" />}
        />
        <h5 style={{ opacity: 0.4 }}>Focused</h5>
        <Switch
          id="testField7"
          name="testField7"
          label={<FormattedMessage id="roofing" />}
          focused
        />
        <h5 style={{ opacity: 0.4 }}>Disabled</h5>
        <Switch
          id="testField8"
          name="testField8"
          label={<FormattedMessage id="roofing" />}
          disabled
        />
        <h5 style={{ opacity: 0.4 }}>Checked</h5>
        <Switch
          id="testField9"
          name="testField9"
          label={<FormattedMessage id="roofing" />}
          checked
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
        <h4 style={{ opacity: 0.5 }}>AddressAutocomplete</h4>
        <AddressAutocomplete
          id="testField10"
          name="testField10"
          type="text"
          label="Address"
          error={<FormattedMessage id="roofing" />}
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <h3 style={{ opacity: 0.6 }}>Form group components</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4 style={{ opacity: 0.5 }}>Checkbox group</h4>
        <CheckboxGroup
          label={<FormattedMessage id="roofing" />}
          error={<FormattedMessage id="roofing" />}
        >
          <Checkbox
            id="testField11"
            name="testField11"
            label={<FormattedMessage id="roofing" />}
            checked
          />
          <Checkbox
            id="testField12"
            name="testField12"
            label={<FormattedMessage id="roofing" />}
          />
        </CheckboxGroup>
      </Col>
    </Row>
  </Grid>
)

Buttons.defaultProps = {
  siteTitle: '',
}

export default Buttons
