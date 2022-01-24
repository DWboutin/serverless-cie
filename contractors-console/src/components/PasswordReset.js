import React from 'react'
import { navigate } from 'gatsby'
import { Auth, API } from 'aws-amplify'
import { injectIntl, FormattedMessage } from 'react-intl'
import {
  Button,
  Card,
  Col,
  Grid,
  Icon,
  Modal,
  Row,
  LoadingBar,
  Notification,
} from 'conecto-ui-components'

import AmplifyConfigs from '../_helpers/AmplifyConfigs'

import { Link } from '../i18n'

import LayoutSignIn from './LayoutSignIn'
import PasswordResetRequestForm from './PasswordReset/PasswordResetRequestForm'
import PasswordResetForm from './PasswordReset/PasswordResetForm'

class PasswordReset extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      step: 1,
      modalIsOpen: false,
      isLoading: false,
    }

    AmplifyConfigs()

    this.handlePasswordResetRequestSubmit = this.handlePasswordResetRequestSubmit.bind(
      this
    )
    this.handlePasswordResetSubmit = this.handlePasswordResetSubmit.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
  }

  componentDidCatch(error, info) {
    const { intl } = this.props

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

  async handlePasswordResetRequestSubmit(values) {
    const { intl, locale, baseLocale } = this.props
    const username = values.username.toLowerCase().trim()

    this.setState({
      isLoading: true,
    })

    try {
      await Auth.forgotPassword(username)

      this.setState({
        step: 2,
        isLoading: false,
      })
    } catch (err) {
      this.setState({
        isLoading: false,
      })

      if (err.code === 'InvalidParameterException' && err.message === 'Cannot reset password for the user as there is no registered/verified email or phone_number') {
        this.setState({
          isLoading: true,
        })

        Auth.resendSignUp(values.username.toLowerCase().trim())
          .then(() => {
            Notification.open({
              message: intl.formatMessage({
                id: 'signIn_form_confirmation_notice_title',
              }),
              description: intl.formatMessage(
                {
                  id: 'signIn_form_confirmation_notice_description',
                },
                { email: values.username.trim() }
              ),
              duration: 7,
              onClose: () => {
                const redirectPath =
                  locale === baseLocale
                    ? '/confirmation'
                    : `${locale}/confirmation`

                this.setState(
                  {
                    isLoading: false,
                  },
                  () => {
                    navigate(redirectPath)
                  }
                )
              },
            })
          })
          .catch(e => {
            this.setState({
              isLoading: false,
            })
            Notification.open({
              message: intl.formatMessage({
                id: 'signIn_form_notice_error_newPassword_title',
              }),
              description: intl.formatMessage({
                id: 'signIn_form_notice_error_newPassword_description',
              }),
              duration: 7,
            })
          })
      } else if (err.message === 'User password cannot be reset in the current state.') {
        this.setState({
          isLoading: true,
        })

        await API.post('contractors', '/contact/resend-fast-signup', {
          body: {
            email: username,
          },
        })

        this.setState({
          isLoading: false,
        }, () => {
          Notification.open({
            message: intl.formatMessage({
              id: 'signIn_form_temporaryPassword_resend_title',
            }),
            description: intl.formatMessage(
              { id: 'signIn_form_temporaryPassword_resend_description' },
            ),
            duration: 10,
          })
        })
      } else if (err.code) {
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
      } else if (err.code) {
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

  async handlePasswordResetSubmit(values) {
    const { intl } = this.props

    this.setState({
      isLoading: true,
    })

    try {
      await Auth.forgotPasswordSubmit(
        values.username,
        values.code,
        values.password
      )

      this.setState({
        modalIsOpen: true,
        isLoading: false,
      })
    } catch (err) {
      this.setState({
        isLoading: false,
      })

      if (err.code) {
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
    const { intl } = this.props

    return (
      <LayoutSignIn>
        <Card className="infoCard">
          {this.state.step === 1 && (
            <PasswordResetRequestForm
              onSubmit={this.handlePasswordResetRequestSubmit}
            />
          )}
          {this.state.step === 2 && (
            <PasswordResetForm onSubmit={this.handlePasswordResetSubmit} />
          )}
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
                <FormattedMessage id="passwordReset_passwordIsOk" tagName="p" />
                <Button comp={Link} to="/">
                  {intl.formatMessage({ id: 'signUp_form_button_signIn' })}
                </Button>
              </Col>
            </Row>
          </Grid>
        </Card>
        <Modal
          className="password-reset-modal"
          withBackground
          isOpen={this.state.modalIsOpen}
          handleClose={this.handleModalClose}
        >
          <div className="modal-content">
            <div className="round-check">
              <Icon type="check" />
            </div>
            <FormattedMessage id="passwordReset_modal_title" tagName="h2" />
            <FormattedMessage id="passwordReset_modal_text" tagName="p" />
            <Button comp={Link} to="/">
              {intl.formatMessage({ id: 'passwordReset_modal_button' })}
            </Button>
          </div>
        </Modal>
        <LoadingBar isLoading={this.state.isLoading} fixed />
      </LayoutSignIn>
    )
  }
}

PasswordReset.propTypes = {}

export default injectIntl(PasswordReset)
