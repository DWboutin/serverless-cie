import React from 'react'
import { injectIntl, FormattedHTMLMessage } from 'react-intl'
import {
  Button,
  CheckPoint,
  Col,
  CTACard,
  Grid,
  Row,
  SVG,
} from 'conecto-ui-components'

import { AuthContext } from '../../_helpers/WithAuthPage'
import { Link } from '../../i18n'

const CTASection = ({ intl }) => (
  <AuthContext.Consumer>
    {context => {
      const { organization, token, requestNotifyPermission } = context || {}
      const { custom_fields } = organization || {}
      const hasPaymentMethod =
        typeof custom_fields !== 'undefined' && custom_fields.stripeSource
      const needToken = !token || token === 'DISMISSED'
      const shouldShowComp = !hasPaymentMethod || needToken
      let comp = null

      if (shouldShowComp) {
        comp = (
          <Grid>
            <Row>
              <Col>
                <CTACard
                  button={
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
                      {!hasPaymentMethod && (
                        <Col
                          xl={{
                            span: 6,
                          }}
                          lg={{
                            span: 6,
                          }}
                          md={{
                            span: 6,
                          }}
                          sm={{
                            span: 12,
                          }}
                          xs={{
                            span: 12,
                          }}
                        >
                          <Button comp={Link} to="/my-company/payment-method">
                            <FormattedHTMLMessage id="layoutDashboard_ctaSection_button_addPaymentMethod" />
                          </Button>
                        </Col>
                      )}
                      {needToken && (
                        <Col
                          xl={{
                            span: 6,
                          }}
                          lg={{
                            span: 6,
                          }}
                          md={{
                            span: 6,
                          }}
                          sm={{
                            span: 12,
                          }}
                          xs={{
                            span: 12,
                          }}
                        >
                          <Button handleClick={requestNotifyPermission}>
                            <FormattedHTMLMessage id="layoutDashboard_ctaSection_button_authorizeNotify" />
                          </Button>
                        </Col>
                      )}
                    </Row>
                  }
                  image={<SVG.ContractorSimple />}
                  className="cta-dashboard"
                  withOverlap
                >
                  <FormattedHTMLMessage
                    tagName="h1"
                    id="layoutDashboard_ctaSection_title"
                  />
                  <Grid>
                    <Row>
                      {!hasPaymentMethod && (
                        <Col
                          xl={{
                            span: 6,
                          }}
                          lg={{
                            span: 6,
                          }}
                          md={{
                            span: 6,
                          }}
                          sm={{
                            span: 12,
                          }}
                          xs={{
                            span: 12,
                          }}
                        >
                          <CheckPoint>
                            {intl.formatMessage({
                              id:
                                'layoutDashboard_ctaSection_checkpoint_aPaymentMethod',
                            })}
                          </CheckPoint>
                        </Col>
                      )}
                      {needToken && (
                        <Col
                          xl={{
                            span: 6,
                          }}
                          lg={{
                            span: 6,
                          }}
                          md={{
                            span: 6,
                          }}
                          sm={{
                            span: 12,
                          }}
                          xs={{
                            span: 12,
                          }}
                        >
                          <CheckPoint>
                            {intl.formatMessage({
                              id:
                                'layoutDashboard_ctaSection_checkpoint_authorizeNotify',
                            })}
                          </CheckPoint>
                        </Col>
                      )}
                    </Row>
                  </Grid>
                </CTACard>
              </Col>
            </Row>
          </Grid>
        )
      }

      return comp
    }}
  </AuthContext.Consumer>
)

CTASection.propTypes = {}

export default injectIntl(CTASection)
