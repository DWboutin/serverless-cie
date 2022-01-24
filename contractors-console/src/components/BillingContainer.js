import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Row, Col, Card, LoadingBar } from 'conecto-ui-components'

import ChargeRow from './BillingContainer/ChargeRow'

class BillingContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
    }
  }

  componentDidMount() {
    const { refreshBilling } = this.props

    this.setState({
      isLoading: true,
    }, async () => {
      await refreshBilling()

      this.setState({
        isLoading: false,
      })
    })
  }

  render() {
    const { charges } = this.props
    let total = 0

    charges.forEach(charge => {
      total += charge.amount
    })

    total = total / 100

    return (
      <>
        <Card className="billing-table">
          <Row>
            <Col>
              <Row>
                <Col>
                  <FormattedMessage id="account_billing_title" tagName="h1" />
                </Col>
              </Row>
              <Row>
                <Col className="to-table">
                  <table>
                    <thead>
                      <tr>
                        <th><FormattedMessage id="account_billing_table_th_opportunity_id" /></th>
                        {/*<th><FormattedMessage id="account_billing_table_th_service" /></th>*/}
                        <th><FormattedMessage id="account_billing_table_th_requester" /></th>
                        <th><FormattedMessage id="account_billing_table_th_card" /></th>
                        <th><FormattedMessage id="account_billing_table_th_amount" /></th>
                        <th><FormattedMessage id="account_billing_table_th_date" /></th>
                      </tr>
                    </thead>
                    <tbody>
                      {charges.map(charge => <ChargeRow data={charge} key={charge.id} />)}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colspan="3" />
                        <td className="text-right">{total.toFixed(2)}$</td>
                        <td />
                      </tr>
                    </tfoot>
                  </table>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
        <LoadingBar isLoading={this.state.isLoading} fixed />
      </>
    )
  }
}

BillingContainer.propTypes = {}

BillingContainer.defaultProps = {
  charges: [],
}

export default BillingContainer
