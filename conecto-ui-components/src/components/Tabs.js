import React from 'react'

import Grid, { Row, Col } from '../_components/Grid'
import Tabs, { TabPanel } from '../_components/Tabs'
import Button from '../_components/Button'

const Tags = () => (
  <Grid>
    <Row>
      <Col>
        <h2 style={{ opacity: 0.7 }}>Tabs</h2>
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
          span: 6,
        }}
        lg={{
          span: 6,
        }}
        xl={{
          span: 6,
        }}
      >
        <h3 style={{ opacity: 0.6 }}>Title at the top</h3>
        <Tabs
          titlePosition="top"
          focusedIndex={1}
          fixedItem={<Button>Test</Button>}
        >
          <TabPanel title="Test title 1" clickDisabled>
            Test panel 1
          </TabPanel>
          <TabPanel title="Test title 2" clickDisabled>
            Test panel 2
          </TabPanel>
          <TabPanel title="Test title 3" clickDisabled>
            Test panel 3
          </TabPanel>
        </Tabs>
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
          span: 6,
        }}
      >
        <h3 style={{ opacity: 0.6 }}>Title at the bottom</h3>
        <Tabs titlePosition="bottom">
          <TabPanel title="Test title 1">Test panel 1</TabPanel>
          <TabPanel title="Test title 2">Test panel 2</TabPanel>
          <TabPanel title="Test title 3">Test panel 3</TabPanel>
        </Tabs>
      </Col>
    </Row>
  </Grid>
)

Tags.defaultProps = {}

export default Tags
