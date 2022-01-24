import React from 'react'
import moment from 'moment'
import { injectIntl } from 'react-intl'
import { Row, Col, Icon, Button } from 'conecto-ui-components'

import RoofingAsphaltShingle from './icons/RoofingAsphaltShingle'
import RoofingAsphaltAndGravel from './icons/RoofingAsphaltAndGravel'
import RoofingElastomeric from './icons/RoofingElastomeric'
import RoofingSheetMetal from './icons/RoofingSheetMetal'
import RoofingEPDM from './icons/RoofingEPDM'
import RoofingOther from './icons/RoofingOther'
import RoofingTPO from './icons/RoofingTPO'
import SlopeFlat from './icons/SlopeFlat'
import SlopeLow from './icons/SlopeLow'
import SlopeHigh from './icons/SlopeHigh'
import SlopeMansard from './icons/SlopeMansard'

import { Link } from '../../i18n'

class RoofingOpportunity extends React.Component {
  constructor(props) {
    super(props)

    this.jobTypeIcon = null
    this.jobTypeSpecificIcon = null

    this.defineJobTypeIcon = this.defineJobTypeIcon.bind(this)
    this.defineJobTypeSpecificIcon = this.defineJobTypeSpecificIcon.bind(this)

    this.defineJobTypeIcon()
    this.defineJobTypeSpecificIcon()
  }

  defineJobTypeIcon() {
    const { jobType } = this.props

    switch (jobType) {
      case 'asphalt_shingle':
        this.jobTypeIcon = <RoofingAsphaltShingle />
        break
      case 'asphalt_and_gravel':
        this.jobTypeIcon = <RoofingAsphaltAndGravel />
        break
      case 'elastomeric':
        this.jobTypeIcon = <RoofingElastomeric />
        break
      case 'sheet_metal':
        this.jobTypeIcon = <RoofingSheetMetal />
        break
      case 'tpo':
        this.jobTypeIcon = <RoofingTPO />
        break
      case 'epdm':
        this.jobTypeIcon = <RoofingEPDM />
        break
      case 'other':
      default:
        this.jobTypeIcon = <RoofingOther />
        break
    }
  }

  defineJobTypeSpecificIcon() {
    const { jobTypeSpecific } = this.props

    switch (jobTypeSpecific) {
      case 'flat':
        this.jobTypeSpecificIcon = <SlopeFlat />
        break
      case 'low_slope':
        this.jobTypeSpecificIcon = <SlopeLow />
        break
      case 'high_slope':
        this.jobTypeSpecificIcon = <SlopeHigh />
        break
      case 'mansard':
        this.jobTypeSpecificIcon = <SlopeMansard />
        break
      case 'other':
      default:
        this.jobTypeSpecificIcon = <RoofingOther />
        break
    }
  }

  render() {
    const {
      intl,
      dealInfosId,
      location,
      jobType,
      jobTypeSpecific,
      remainingSeats,
      createdAt,
    } = this.props

    let remainingPlaceMessage = intl.formatMessage(
      { id: 'opportunities_card_remainingPlaces' },
      { remainingSeats: remainingSeats }
    )

    return (
      <Link to={`/opportunity/${dealInfosId}`} className="roofing-opportunity">
        <Row>
          <Col>
            <div>{dealInfosId}</div>
          </Col>
          <Col>
            <Icon type="marker" />
            {location}
          </Col>
          <Col>
            <i className="icon">{this.jobTypeIcon}</i>
            <span className="text">
              {intl.formatMessage({ id: `labelJobType_${jobType}` })}
            </span>
          </Col>
          <Col>
            <i className="icon">{this.jobTypeSpecificIcon}</i>
            <span className="text">
              {intl.formatMessage({
                id: `labelJobTypeSpecific_${jobTypeSpecific}`,
              })}
            </span>
          </Col>
          <Col>
            <span className="date">{moment(createdAt).fromNow()}</span>
            <div className="remainingSeats">{remainingPlaceMessage}</div>
            <Button className="view-more">Plus d'infos</Button>
          </Col>
        </Row>
      </Link>
    )
  }
}

RoofingOpportunity.propTypes = {}

export default injectIntl(RoofingOpportunity)
