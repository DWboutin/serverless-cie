import React from 'react'
import moment from 'moment'
import { API } from 'aws-amplify'
import classNames from 'classnames'
import { FormattedMessage, injectIntl } from 'react-intl'
import {
  Card,
  Row,
  Col,
  Button,
  LoadingBar,
  Notification,
} from 'conecto-ui-components'

class EmployeeCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
    }

    this.handleEmployeeDelete = this.handleEmployeeDelete.bind(this)
    this.handleSetAsAdmin = this.handleSetAsAdmin.bind(this)
    this.handleRevokeAsAdmin = this.handleRevokeAsAdmin.bind(this)
    this.handleSetAsOwner = this.handleSetAsOwner.bind(this)
  }

  componentDidCatch(error, info) {
    const { intl } = this.props

    this.setState({
      isLoading: false,
    })

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

  async handleEmployeeDelete() {
    const {
      intl,
      id,
      firstName,
      lastName,
      email,
      refreshEmployees,
    } = this.props

    this.setState({
      isLoading: true,
    })

    await API.del('contractors', '/company/employee/' + id, {})

    this.setState(
      {
        isLoading: false,
      },
      () => {
        Notification.open({
          message: intl.formatMessage({
            id: 'account_employeesDisplay_card_notice_delete_title',
          }),
          description: intl.formatMessage(
            { id: 'account_employeesDisplay_card_notice_delete_text' },
            {
              firstName,
              lastName,
              email,
            }
          ),
          duration: 7,
        })

        refreshEmployees()
      }
    )
  }

  async handleSetAsAdmin() {
    const { intl, id, firstName, lastName, refreshEmployees } = this.props

    this.setState({
      isLoading: true,
    })

    await API.post('contractors', '/contact/set-as-admin/' + id, {})

    this.setState({
      isLoading: false,
    })

    this.setState(
      {
        isLoading: false,
      },
      () => {
        Notification.open({
          message: intl.formatMessage({
            id: 'account_employeesDisplay_card_notice_setAsAdmin_title',
          }),
          description: intl.formatMessage(
            { id: 'account_employeesDisplay_card_notice_setAsAdmin_text' },
            {
              firstName,
              lastName,
            }
          ),
          duration: 7,
        })

        refreshEmployees()
      }
    )
  }

  async handleRevokeAsAdmin() {
    const {
      intl,
      id,
      firstName,
      lastName,
      refreshEmployees,
      isCurrentUser,
      handleLogout,
    } = this.props

    this.setState({
      isLoading: true,
    })

    await API.post('contractors', '/contact/revoke-as-admin/' + id, {})

    this.setState({
      isLoading: false,
    })

    this.setState(
      {
        isLoading: false,
      },
      () => {
        Notification.open({
          message: intl.formatMessage({
            id: 'account_employeesDisplay_card_notice_revokeAsAdmin_title',
          }),
          description: intl.formatMessage(
            { id: 'account_employeesDisplay_card_notice_revokeAsAdmin_text' },
            {
              firstName,
              lastName,
            }
          ),
          duration: 7,
        })

        if (!isCurrentUser) {
          refreshEmployees()
        } else {
          handleLogout({ preventDefault: () => {} })
        }
      }
    )
  }

  async handleSetAsOwner() {
    const {
      intl,
      id,
      firstName,
      lastName,
      refreshContact,
      refreshEmployees,
    } = this.props

    this.setState({
      isLoading: true,
    })

    await API.post('contractors', '/company/update-owner/' + id, {})

    this.setState({
      isLoading: false,
    })

    this.setState(
      {
        isLoading: false,
      },
      () => {
        Notification.open({
          message: intl.formatMessage({
            id: 'account_employeesDisplay_card_notice_setAsOwner_title',
          }),
          description: intl.formatMessage(
            { id: 'account_employeesDisplay_card_notice_setAsOwner_text' },
            {
              firstName,
              lastName,
            }
          ),
          duration: 7,
        })

        refreshContact()
        refreshEmployees()
      }
    )
  }

  render() {
    const {
      intl,
      currentUserIsAdmin,
      currentUserIsOwner,
      userIsOwner,
      isCurrentUser,
      firstName,
      lastName,
      email,
      activeForRoofing,
      isAdmin,
      createdAt,
    } = this.props
    const classes = classNames({
      'employee-card': true,
      'is-current-user': isCurrentUser,
    })

    return (
      <Card type={isCurrentUser ? 'shadowed' : 'bordered'} className={classes}>
        <Row className="employeeInfos">
          <Col
            className="infos"
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
              span: 6,
            }}
            xs={{
              span: 12,
            }}
          >
            <div className="name">
              {firstName} {lastName}
            </div>
            {isAdmin && !currentUserIsOwner && (
              <div className="titre">
                <FormattedMessage
                  id="account_employeesDisplay_card_isAdmin"
                  tagName="small"
                />
              </div>
            )}
            {isAdmin && currentUserIsOwner && (
              <div className="titre">
                <FormattedMessage
                  id="account_employeesDisplay_card_isOwner"
                  tagName="small"
                />
              </div>
            )}
            {!isAdmin && !currentUserIsOwner && (
              <div className="titre">
                <FormattedMessage
                  id="account_employeesDisplay_card_isEmployee"
                  tagName="small"
                />
              </div>
            )}
            <div className="email">{email}</div>
          </Col>
          <Col
            className="active"
            xl={{
              span: 3,
            }}
            lg={{
              span: 3,
            }}
            md={{
              span: 2,
            }}
            sm={{
              span: 2,
            }}
            xs={{
              span: 12,
            }}
          >
            <div className="roofing">
              {activeForRoofing}{' '}
              {activeForRoofing &&
                intl.formatMessage({
                  id: 'account_employeesDisplay_card_activeForRoofing',
                })}
            </div>
          </Col>
          <Col
            className="date"
            xl={{
              span: 3,
            }}
            lg={{
              span: 3,
            }}
            md={{
              span: 4,
            }}
            sm={{
              span: 4,
            }}
            xs={{
              span: 12,
            }}
          >
            <FormattedMessage id="account_employeesDisplay_card_subscribedAt" />{' '}
            {moment(createdAt).fromNow()}
          </Col>
        </Row>
        {!currentUserIsOwner && (
          <footer>
            {isAdmin && !isCurrentUser && userIsOwner && (
              <Button type="ghost" handleClick={this.handleSetAsOwner}>
                <FormattedMessage id="account_employeesDisplay_card_promoteOwnerButton" />
              </Button>
            )}
            {isAdmin && (currentUserIsAdmin && !isCurrentUser) && (
              <Button type="ghost" handleClick={this.handleRevokeAsAdmin}>
                <FormattedMessage id="account_employeesDisplay_card_revokeAdminButton" />
              </Button>
            )}
            {!isAdmin && currentUserIsAdmin && (
              <Button type="ghost" handleClick={this.handleSetAsAdmin}>
                <FormattedMessage id="account_employeesDisplay_card_promoteAdminButton" />
              </Button>
            )}
            {currentUserIsAdmin && !isCurrentUser && (
              <Button type="bordered" handleClick={this.handleEmployeeDelete}>
                <FormattedMessage id="account_employeesDisplay_card_deleteButton" />
              </Button>
            )}
          </footer>
        )}
        <LoadingBar isLoading={this.state.isLoading} fixed />
      </Card>
    )
  }
}

EmployeeCard.defaultProps = {
  employeesNameBySub: {},
  currentUserIsOwner: false,
}

export default injectIntl(EmployeeCard)
