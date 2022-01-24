import React from 'react'
import moment from 'moment'

import { Link } from '../../i18n'

class BillingContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      charges: null,
    }
  }

  render() {
    const { data } = this.props
    const explodedName = data.description.split(' - ')
    const paymentMethodBrand = data.payment_method_details.card.brand
    const service = explodedName[1].replace('Conecto ', '')

    return (
      <tr className={service.toLowerCase()}>
        <td><Link to={`/lead/${explodedName[0]}`}>{explodedName[0]}</Link></td>
        {/*<td><span className="service-square"></span> {service}</td>*/}
        <td>{explodedName[2]}</td>
        <td>{`${paymentMethodBrand.charAt(0).toUpperCase() + paymentMethodBrand.slice(1)} (...${data.payment_method_details.card.last4})`}</td>
        <td className="text-right">{data.amount / 100}$</td>
        <td className="text-right">{moment.unix(data.created).format('DD-MM-YYYY HH:mm')}</td>
      </tr>
    )
  }
}

BillingContainer.propTypes = {}

BillingContainer.defaultProps = {}

export default BillingContainer
