import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Button, Logo, PhoneDisplay, SVG, Icon } from 'conecto-ui-components'

const PhoneDisplayHandler = ({ selectedIndex }) => {
  return (
    <PhoneDisplay
      logo={selectedIndex === 0 ? (
        <Logo type="roofing" suffix={<FormattedMessage id="roofing" />} />
      ): (
        <Logo suffix={<FormattedMessage id="contractor" />} />
      )}
      button={
        selectedIndex === 0 ? (
          <Button
            type="bordered"
            comp="a"
            href="mailto:support@conecto.ca"
            rel="noopener"
          >
            support@conecto.ca
          </Button>
        ) : (
          <Button
            type="bordered"
            comp="a"
            href="mailto:entrepreneurs@conecto.ca"
            rel="noopener"
          >
            entrepreneurs@conecto.ca
          </Button>
        )
      }
      bottomSvgComponent={<SVG.RoofingPhoneBg />}
    >
      <div
        className="phone-display-wrapper"
        style={{ marginLeft: `${selectedIndex * -100}%` }}
      >
        <div className={`panel ${selectedIndex !== 0 && 'inactive'}`}>
          <div className="flag-circle">
            <div className="circle">
              <Icon type="flag" />
            </div>
          </div>
          <FormattedMessage
            id="advantagesSection_panel1_phone_title"
            tagName="h3"
          />
          <FormattedMessage
            id="advantagesSection_panel1_phone_text"
            tagName="p"
          />
        </div>
        <div className={`panel ${selectedIndex !== 1 && 'inactive'}`}>
          <div className="flag-circle">
            <div className="circle">
              <Icon type="flag" />
            </div>
          </div>
          <FormattedMessage
            id="advantagesSection_panel2_phone_title"
            tagName="h3"
          />
          <FormattedMessage
            id="advantagesSection_panel2_phone_text"
            tagName="p"
          />
        </div>
      </div>
    </PhoneDisplay>
  )
}

export default PhoneDisplayHandler
