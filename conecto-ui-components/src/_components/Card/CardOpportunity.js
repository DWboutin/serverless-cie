import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import omit from 'omit.js'

import Icon from '../Icon'

const CardOpportunity = ({
  className,
  img,
  logo,
  buttons,
  accepted,
  opportunityId,
  opportunityDate,
  opportunityRemainingPlace,
  labelCity,
  labelJobType,
  labelJobTypeSpecific,
  valueCity,
  valueJobType,
  valueJobTypeSpecific,
  valueMoreInfosAccordion,
  ...props
}) => {
  const classes = classNames({
    'to-card to-card-opportunity': true,
    'has-accordion': valueMoreInfosAccordion,
    [`${className}`]: className,
  })
  const componentProps = omit(props, [
    'className',
    'img',
    'logo',
    'buttons',
    'accepted',
    'opportunityId',
    'opportunityDate',
    'opportunityRemainingPlace',
    'labelCity',
    'labelJobType',
    'labelJobTypeSpecific',
    'valueCity',
    'valueJobType',
    'valueJobTypeSpecific',
    'valueMoreInfosAccordion',
    'onAcceptation',
    'onReject',
  ])

  return (
    <div className={classes} {...componentProps}>
      <header className="card-opporunity-header">
        <div className="logo">{logo}</div>
        <div className="header-info">
          <div className="opportunity-id">{opportunityId}</div>
          <div className="opportunity-time">{opportunityDate}</div>
        </div>
        {opportunityRemainingPlace && !accepted && (
          <span className="remaining-places">{opportunityRemainingPlace}</span>
        )}
      </header>
      <div className="to-card-wrap">
        {img && <div className="to-card-map">{img}</div>}
        <div className="to-card-content">
          <div className="opportunity-city">
            <div className="label">{labelCity}</div>
            <div className="value">
              <Icon type="marker" />
              <span>{valueCity}</span>
            </div>
          </div>
          <div className="opportunity-job">
            <div className="job-type">
              <div className="label">{labelJobType}</div>
              <div className="value">
                <span>{valueJobType}</span>
              </div>
            </div>
            <div className="job-type-specific">
              <div className="label">{labelJobTypeSpecific}</div>
              <div className="value">
                <span>{valueJobTypeSpecific}</span>
              </div>
            </div>
          </div>
        </div>
        {valueMoreInfosAccordion}
      </div>
      <footer className="card-opporunity-footer">{buttons}</footer>
    </div>
  )
}

CardOpportunity.defaultProps = {
  valueMoreInfosAccordion: null,
}

CardOpportunity.propTypes = {
  img: PropTypes.node.isRequired,
  logo: PropTypes.node.isRequired,
  accepted: PropTypes.bool.isRequired,
  buttons: PropTypes.node.isRequired,
  opportunityId: PropTypes.string.isRequired,
  opportunityDate: PropTypes.string.isRequired,
  opportunityRemainingPlace: PropTypes.string.isRequired,
  labelCity: PropTypes.string.isRequired,
  labelJobType: PropTypes.string.isRequired,
  labelJobTypeSpecific: PropTypes.string.isRequired,
  valueCity: PropTypes.string.isRequired,
  valueJobType: PropTypes.string.isRequired,
  valueJobTypeSpecific: PropTypes.string.isRequired,
  valueMoreInfosAccordion: PropTypes.any,
}

export default CardOpportunity
