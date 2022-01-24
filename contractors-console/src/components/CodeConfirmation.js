import React from 'react'
import PropTypes from 'prop-types'
import { Auth } from 'aws-amplify'
import { injectIntl, FormattedMessage } from 'react-intl'
import {
  Grid,
  Row,
  Col,
  Button,
  Card,
  Icon,
  Modal,
  LoadingBar,
  Notification,
} from 'conecto-ui-components'

import AmplifyConfigs from '../_helpers/AmplifyConfigs'

import { Link } from '../i18n'

import LayoutSignIn from './LayoutSignIn'
import CodeConfirmationForm from './CodeConfirmation/CodeConfirmationForm'

class CodeConfirmation extends React.Component {
  constructor(props) {
    super(props)

    AmplifyConfigs()

    this.state = {
      modalIsOpen: false,
      isLoading: false,
    }

    this.handleModalClose = this.handleModalClose.bind(this)
    this.handleConfirmationSubmit = this.handleConfirmationSubmit.bind(this)
  }

  componentDidCatch(error, info) {
    Notification.open({
      message: intl.formatMessage({
        id: 'generic_component_error_title',
      }),
      description: intl.formatMessage(
        { id: 'generic_component_error_description' },
        {
          error: error,
          info: info,
        }
      ),
      duration: 7,
    })
  }

  async handleConfirmationSubmit(values, setFieldError) {
    const { intl } = this.props

    this.setState({
      isLoading: true,
    })

    try {
      await Auth.confirmSignUp(values.username, values.code)

      this.setState({
        modalIsOpen: true,
        isLoading: false,
      })
    } catch (err) {
      this.setState({
        isLoading: false,
      })

      if (err.code) {
        switch (err.code) {
          case 'CodeMismatchException':
            setFieldError('code', 'cognito_CodeMismatchException')
            break
          default:
            Notification.open({
              message: intl.formatMessage({
                id: 'signIn_form_notice_error_undefinedCode_title',
              }),
              description: intl.formatMessage(
                { id: 'signIn_form_notice_error_undefinedCode_description' },
                { code: err.code }
              ),
              duration: 7,
            })
            break
        }
      } else {
        Notification.open({
          message: intl.formatMessage({
            id: 'signIn_form_notice_error_undefined_title',
          }),
          description: intl.formatMessage({
            id: 'signIn_form_notice_error_undefined_description',
          }),
          duration: 7,
        })
      }
    }
  }

  handleModalClose() {
    this.setState({
      modalIsOpen: false,
    })
  }

  render() {
    const { intl, params } = this.props

    return (
      <LayoutSignIn>
        <Card className="infoCard">
          <CodeConfirmationForm
            params={params}
            onSubmit={this.handleConfirmationSubmit}
          />
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
                <FormattedMessage
                  id="codeConfirmation_accountIsConfirmed"
                  tagName="p"
                />
                <Button comp={Link} to="/">
                  {intl.formatMessage({ id: 'signUp_form_button_signIn' })}
                </Button>
              </Col>
            </Row>
          </Grid>
        </Card>
        <Modal
          className="signUp-confirmation-modal"
          isOpen={this.state.modalIsOpen}
          handleClose={this.handleModalClose}
        >
          <div className="modal-content">
            <div className="round-check">
              <Icon type="check" />
            </div>
            <FormattedMessage id="code_confirmation_modal_title" tagName="h2" />
            <FormattedMessage id="code_confirmation_modal_text" tagName="p" />
            <Button comp={Link} to="/">
              {intl.formatMessage({ id: 'code_confirmation_modal_button' })}
            </Button>
          </div>
        </Modal>
        <LoadingBar isLoading={this.state.isLoading} fixed />
      </LayoutSignIn>
    )
  }
}

CodeConfirmation.propTypes = {}

export default injectIntl(CodeConfirmation)
