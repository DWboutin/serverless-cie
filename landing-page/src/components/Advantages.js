import React from 'react'
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl'
import {
  Grid,
  Row,
  Col,
  Tabs,
  TabPanel,
  CheckPoint,
} from 'conecto-ui-components'

import PhoneDisplayHandler from './Advantages/PhoneDisplayHandler'

const Advantages = ({ intl, ...props }) => (
  <Grid className="advantages-section" {...props}>
    <Row>
      <Col>
        <Tabs
          titlePosition="top"
          focusedIndex={0}
          fixedItem={<PhoneDisplayHandler />}
        >
          <TabPanel
            title={intl.formatMessage({ id: 'advantagesSection_panel1_title' })}
          >
            <Grid fullHeight>
              <Row>
                <Col
                  xl={{
                    span: 6,
                  }}
                  lg={{
                    span: 6,
                  }}
                  md={{
                    span: 12,
                  }}
                >
                  <FormattedHTMLMessage
                    id="advantagesSection_panel1_content_title"
                    tagName="h2"
                  />
                  <FormattedMessage
                    id="advantagesSection_panel1_content_text"
                    tagName="p"
                  />
                  <div>
                    <CheckPoint>
                      {intl.formatMessage({
                        id: 'advantagesSection_panel1_content_checkpoint1',
                      })}
                    </CheckPoint>
                  </div>
                  <div>
                    <CheckPoint>
                      {intl.formatMessage({
                        id: 'advantagesSection_panel1_content_checkpoint2',
                      })}
                    </CheckPoint>
                  </div>
                  <div>
                    <CheckPoint>
                      {intl.formatMessage({
                        id: 'advantagesSection_panel1_content_checkpoint3',
                      })}
                    </CheckPoint>
                  </div>
                  <div>
                    <CheckPoint>
                      {intl.formatMessage({
                        id: 'advantagesSection_panel1_content_checkpoint4',
                      })}
                    </CheckPoint>
                  </div>
                </Col>
              </Row>
            </Grid>
          </TabPanel>
          <TabPanel
            title={intl.formatMessage({ id: 'advantagesSection_panel2_title' })}
          >
            <Grid>
              <Row>
                <Col
                  xl={{
                    span: 6,
                  }}
                  lg={{
                    span: 6,
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
                >
                  <FormattedMessage
                    id="advantagesSection_panel2_content_title"
                    tagName="h2"
                  />
                  <FormattedMessage
                    id="advantagesSection_panel2_content_text"
                    tagName="p"
                  />
                  <div>
                    <CheckPoint>
                      {intl.formatMessage({
                        id: 'advantagesSection_panel2_content_checkpoint1',
                      })}
                    </CheckPoint>
                  </div>
                  <div>
                    <CheckPoint>
                      {intl.formatMessage({
                        id: 'advantagesSection_panel2_content_checkpoint2',
                      })}
                    </CheckPoint>
                  </div>
                  <div>
                    <CheckPoint>
                      {intl.formatMessage({
                        id: 'advantagesSection_panel2_content_checkpoint3',
                      })}
                    </CheckPoint>
                  </div>
                  <div>
                    <CheckPoint>
                      {intl.formatMessage({
                        id: 'advantagesSection_panel2_content_checkpoint4',
                      })}
                    </CheckPoint>
                  </div>
                </Col>
              </Row>
            </Grid>
          </TabPanel>
        </Tabs>
      </Col>
    </Row>
  </Grid>
)

Advantages.propTypes = {}

export default injectIntl(Advantages)
