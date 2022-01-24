/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, FormattedMessage } from 'react-intl'
import { Grid, Row, Col, Button, Card, CheckPoint } from 'conecto-ui-components'

import { Link } from '../../i18n'

import LayoutSignIn from '../LayoutSignIn'
import SignUpForm from './SignUpForm'

const SignUpStep1 = ({ intl, onSubmit, asyncValidation }) => (
  <LayoutSignIn>
    <Card className="infoCard">
      <SignUpForm onSubmit={onSubmit} asyncValidation={asyncValidation} id="signup-form-step1">
        <>
          <Row>
            <Col
              xs={{
                span: 10,
              }}
              sm={{
                span: 10,
              }}
              md={{
                span: 10,
              }}
              lg={{
                span: 10,
              }}
              xl={{
                span: 10,
              }}
            >
              <FormattedMessage tagName="h1" id="signUp_form_title" />
            </Col>
          </Row>
          <Row>
            <Col>
              <CheckPoint>
                {intl.formatMessage({ id: 'signUp_form_checkpoint1' })}
              </CheckPoint>
              <CheckPoint>
                {intl.formatMessage({ id: 'signUp_form_checkpoint2' })}
              </CheckPoint>
              <CheckPoint>
                {intl.formatMessage({ id: 'signUp_form_checkpoint3' })}
              </CheckPoint>
            </Col>
          </Row>
        </>
      </SignUpForm>
    </Card>
    <Card className="accountCard">
      <Grid>
        <Row
          xs={{
            alignement: 'center',
          }}
          sm={{
            alignement: 'center',
          }}
          md={{
            alignement: 'center',
          }}
          lg={{
            alignement: 'center',
          }}
          xl={{
            alignement: 'center',
          }}
        >
          <Col>
            <FormattedMessage id="signUp_form_hasAccount" tagName="p" />
            <Button comp={Link} to="/">
              {intl.formatMessage({ id: 'signUp_form_button_signIn' })}
            </Button>
          </Col>
        </Row>
      </Grid>
    </Card>
  </LayoutSignIn>
)

SignUpStep1.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  asyncValidation: PropTypes.func.isRequired,
}

export default injectIntl(SignUpStep1)
