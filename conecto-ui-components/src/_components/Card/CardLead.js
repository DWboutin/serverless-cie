import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import omit from 'omit.js'

import Icon from '../Icon'

const CardLead = ({
  className,
  logo,
  buttons,
  checkboxes,
  requester,
  img,
  latitude,
  longitude,
  opportunityId,
  opportunityDate,
  opportunityRemainingPlace,
  labelCity,
  labelJobType,
  labelJobTypeSpecific,
  labelRequester,
  labelContactPreference,
  valueCity,
  valueJobType,
  valueJobTypeSpecific,
  valueMoreInfosAccordion,
  ...props
}) => {
  const classes = classNames({
    'to-card to-card-lead': true,
    'has-accordion': valueMoreInfosAccordion,
    [`${className}`]: className,
  })
  const componentProps = omit(props, [
    'className',
    'logo',
    'buttons',
    'checkboxes',
    'requester',
    'img',
    'latitude',
    'longitude',
    'opportunityId',
    'opportunityDate',
    'labelCity',
    'labelJobType',
    'labelJobTypeSpecific',
    'labelRequester',
    'labelContactPreference',
    'valueCity',
    'valueJobType',
    'valueJobTypeSpecific',
    'valueMoreInfosAccordion',
  ])

  return (
    <div className={classes} {...componentProps}>
      <header className="card-lead-header">
        <div className="logo">{logo}</div>
        <div className="header-info">
          <div className="opportunity-id">{opportunityId}</div>
          <div className="opportunity-time">{opportunityDate}</div>
        </div>
      </header>
      <div className="to-card-wrap">
        <div className="to-card-map">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`}
            target="_blank"
          >
            {img}
          </a>
        </div>
        <div className="to-card-content">
          <div className="opportunity-city">
            <div className="label">{labelCity}</div>
            <div className="value">
              <Icon type="marker" />
              <span>{valueCity}</span>
            </div>
          </div>
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
        {valueMoreInfosAccordion}
      </div>
      <footer className="card-lead-footer">
        <div className="contact-infos">
          <div className="info">
            <div className="label">{labelRequester}</div>
            <div className="value">
              <span>{requester}</span>
            </div>
          </div>
          <div className="info">
            <div className="label">{labelContactPreference}</div>
            <div className="value">{checkboxes}</div>
          </div>
        </div>
        <div className="contact-actions">{buttons}</div>
      </footer>
    </div>
  )
}

CardLead.defaultProps = {
  valueMoreInfosAccordion: null,
}

CardLead.propTypes = {
  logo: PropTypes.node.isRequired,
  buttons: PropTypes.node.isRequired,
  checkboxes: PropTypes.node.isRequired,
  img: PropTypes.node.isRequired,
  requester: PropTypes.string.isRequired,
  opportunityId: PropTypes.string.isRequired,
  opportunityDate: PropTypes.string.isRequired,
  labelCity: PropTypes.string.isRequired,
  labelJobType: PropTypes.string.isRequired,
  labelJobTypeSpecific: PropTypes.string.isRequired,
  labelRequester: PropTypes.string.isRequired,
  labelContactPreference: PropTypes.string.isRequired,
  valueCity: PropTypes.string.isRequired,
  valueJobType: PropTypes.string.isRequired,
  valueJobTypeSpecific: PropTypes.string.isRequired,
  valueMoreInfosAccordion: PropTypes.any,
  latitude: PropTypes.any.isRequired,
  longitude: PropTypes.any.isRequired,
}

export default CardLead
