import React from 'react'
import { FormattedMessage } from 'react-intl'

import Grid, { Row, Col } from '../_components/Grid'
import Button, { ButtonGroup, ButtonDropdown } from '../_components/Button'
import Icon from '../_components/Icon'
import { Link } from '../i18n'

const Buttons = () => (
  <Grid>
    <Row>
      <Col>
        <h2 style={{ opacity: 0.7 }}>Buttons</h2>
      </Col>
    </Row>
    <Row>
      <Col>
        <h3 style={{ opacity: 0.6 }}>Types</h3>
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
        <h4 style={{ opacity: 0.5 }}>Simple (default) button</h4>
        <Button>Button</Button>
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
        <h4 style={{ opacity: 0.5 }}>Roofing button</h4>
        <Button type="roofing">Button</Button>
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
        <h4 style={{ opacity: 0.5 }}>Bordered button</h4>
        <Button type="bordered">Button</Button>
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
        <h4 style={{ opacity: 0.5 }}>Ghost button</h4>
        <Button type="ghost">Button</Button>
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
        <h4 style={{ opacity: 0.5 }}>Underlined button</h4>
        <Button type="underlined">Button</Button>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4 style={{ opacity: 0.5 }}>Menu button</h4>
        <Button type="menu">
          Menu
          <Icon type="menu" />
        </Button>
      </Col>
      <Col>
        <h4 style={{ opacity: 0.5 }}>Account button</h4>
        <Button type="account">
          <Icon type="user" />
          Account
        </Button>
      </Col>
    </Row>
    <Row>
      <Col>
        <h3 style={{ opacity: 0.6 }}>Variations</h3>
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
          span: 6,
        }}
        lg={{
          span: 6,
        }}
        xl={{
          span: 6,
        }}
      >
        <h4 style={{ opacity: 0.5 }}>With Gatsby's Link component</h4>
        <Button comp={Link} to="/">
          Button
        </Button>
      </Col>
      <Col
        xs={{
          span: 12,
        }}
        sm={{
          span: 6,
        }}
        md={{
          span: 6,
        }}
        lg={{
          span: 6,
        }}
        xl={{
          span: 6,
        }}
      >
        <h4 style={{ opacity: 0.5 }}>With an Icon</h4>
        <Button>
          <Icon type="facebook" />
          Button
        </Button>
      </Col>
    </Row>
    <Row>
      <Col>
        <h3 style={{ opacity: 0.6 }}>Button group</h3>
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
          span: 6,
        }}
        lg={{
          span: 6,
        }}
        xl={{
          span: 4,
        }}
      >
        <h4 style={{ opacity: 0.5 }}>Default buttons</h4>
        <ButtonGroup>
          <Button>Button</Button>
          <Button>Button</Button>
        </ButtonGroup>
      </Col>
      <Col
        xs={{
          span: 12,
        }}
        sm={{
          span: 12,
        }}
        md={{
          span: 6,
        }}
        lg={{
          span: 6,
        }}
        xl={{
          span: 4,
        }}
      >
        <h4 style={{ opacity: 0.5 }}>With switch buttons</h4>
        <ButtonGroup>
          <Button type="switch" active>
            Button
          </Button>
          <Button type="switch">Button</Button>
        </ButtonGroup>
      </Col>
      <Col
        xs={{
          span: 12,
        }}
        sm={{
          span: 12,
        }}
        md={{
          span: 6,
        }}
        lg={{
          span: 6,
        }}
        xl={{
          span: 4,
        }}
      >
        <h4 style={{ opacity: 0.5 }}>With filter buttons</h4>
        <ButtonGroup>
          <Button type="filter">Button</Button>
          <Button type="filter" active>
            Button
          </Button>
          <Button type="filter">Button</Button>
          <Button type="filter">Button</Button>
        </ButtonGroup>
      </Col>
      <Col
        xs={{
          span: 12,
        }}
        sm={{
          span: 12,
        }}
        md={{
          span: 6,
        }}
        lg={{
          span: 6,
        }}
        xl={{
          span: 4,
        }}
      >
        <h4 style={{ opacity: 0.5 }}>With dropdown</h4>
        <ButtonDropdown
          id="dropdown-button"
          type="account"
          className="hidden-md hidden-sm hidden-xs"
          links={[
            <a href="#">test</a>,
            <a href="#">test</a>,
            <a href="#">test</a>,
            <a href="#">test</a>,
          ]}
        >
          <Icon type="user" />
          Test 12345
        </ButtonDropdown>
      </Col>
    </Row>
  </Grid>
)

Buttons.defaultProps = {
  siteTitle: '',
}

export default Buttons
