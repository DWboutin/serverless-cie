import { Auth } from 'aws-amplify'
import { Button, Card, Col, Grid, LoadingBar, Modal, Notification, Row } from 'conecto-ui-components'
import { navigate } from 'gatsby'
import queryString from 'query-string'
import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'

import AmplifyConfigs from '../_helpers/AmplifyConfigs'
import { Link } from '../i18n'
import LayoutSignIn from './LayoutSignIn'
import PasswordChangeForm from './SignIn/PasswordChangeForm'
import SignInForm from './SignIn/SignInForm'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      passwordChangeModalIsOpen: false,
      user: null,
      username: null,
      temporaryPassword: null,
    }

    AmplifyConfigs()

    this.handleModalClose = this.handleModalClose.bind(this)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handlePasswordChangeSubmit = this.handlePasswordChangeSubmit.bind(this)
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

  async handleLoginSubmit(values) {
    const { searchPath, locale, baseLocale, intl } = this.props

    this.setState({
      isLoading: true,
    })

    try {
      const username = values.username.toLowerCase().trim()
      const signinInfos = await Auth.signIn(username, values.password)

      if (
        'challengeName' in signinInfos &&
        signinInfos.challengeName === 'NEW_PASSWORD_REQUIRED'
      ) {
        this.setState({
          isLoading: false,
          passwordChangeModalIsOpen: true,
          user: signinInfos,
          username: username,
        })
      } else {
        let redirectPath =
          locale === baseLocale ? '/dashboard' : `${locale}/dashboard`

        if (searchPath.length > 1 && searchPath.indexOf('?r=') >= 0) {
          redirectPath = decodeURIComponent(searchPath.replace('?r=', ''))
        }

        this.setState(
          {
            isLoading: false,
            passwordChangeModalIsOpen: false,
            user: null,
            username: null,
          },
          () => {
            setTimeout(() => {
              navigate(redirectPath)
            }, 200)
          }
        )
      }
    } catch (err) {
      this.setState({
        isLoading: false,
      })

      if (err.code === 'UserNotConfirmedException') {
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
      } else if (err.code === 'PasswordResetRequiredException') {
        Notification.open({
          message: intl.formatMessage({
            id: 'signIn_form_notice_error_newPassword_title',
          }),
          description: intl.formatMessage({
            id: 'signIn_form_notice_error_newPassword_description',
          }),
          duration: 7,
        })
      } else if (err.code === 'NotAuthorizedException') {
        Notification.open({
          message: intl.formatMessage({
            id: 'signIn_form_notice_error_notAuthorized_title',
          }),
          description: intl.formatMessage({
            id: 'signIn_form_notice_error_notAuthorized_description',
          }),
          duration: 7,
        })
      } else if (err.code === 'UserNotFoundException') {
        Notification.open({
          message: intl.formatMessage({
            id: 'signIn_form_notice_error_userNotFound_title',
          }),
          description: intl.formatMessage({
            id: 'signIn_form_notice_error_userNotFound_description',
          }),
          duration: 7,
        })
      } else {
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
      }
    }
  }

  async handlePasswordChangeSubmit(values) {
    const { user } = this.state

    try {
      if (user) {
        await Auth.completeNewPassword(this.state.user, values.password)

        const updateAttributes = await Auth.updateUserAttributes(
          this.state.user,
          {
            email_verified: true,
            phone_number_verified: true,
          }
        )

        console.log(updateAttributes)

        this.handleLoginSubmit({
          username: this.state.username,
          password: values.password,
        })
      }
    } catch (err) {
      this.setState({
        isLoading: false,
      })
    }
  }

  handleModalClose() {
    this.setState({
      passwordChangeModalIsOpen: false,
    })
  }

  render() {
    const { intl, searchPath } = this.props
    const { passwordChangeModalIsOpen } = this.state

    return (
      <LayoutSignIn>
        <Card className="infoCard">
          <SignInForm
            params={queryString.parse(searchPath)}
            onSubmit={this.handleLoginSubmit}
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
                  id="signIn_youDontHaveAnAccount"
                  tagName="p"
                />
                <Button comp={Link} to="/sign-up">
                  {intl.formatMessage({ id: 'signIn_button_signUp' })}
                </Button>
              </Col>
            </Row>
          </Grid>
        </Card>
        <Modal
          className="signIn-passwordChange-modal"
          isOpen={passwordChangeModalIsOpen}
          handleClose={this.handleModalClose}
        >
          <div className="modal-content">
            <PasswordChangeForm onSubmit={this.handlePasswordChangeSubmit} />
          </div>
        </Modal>
        <LoadingBar isLoading={this.state.isLoading} fixed />
      </LayoutSignIn>
    )
  }
}

SignIn.propTypes = {}

export default injectIntl(SignIn)
