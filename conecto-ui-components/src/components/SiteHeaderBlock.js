import React from 'react'
import { FormattedMessage } from 'react-intl'

import Grid, { Row, Col } from '../_components/Grid'
import { NavigationLink } from '../_components/Navigation'
import Button from '../_components/Button'
import Icon from '../_components/Icon'
import Logo from '../_components/Logo'
import SiteHeader from '../_components/SiteHeader'

import { Link } from '../i18n'

const SiteHeaderBlock = () => (
  <>
    <Row>
      <Col>
        <h2 style={{ opacity: 0.7 }}>Site Header</h2>
      </Col>
    </Row>
    <Row
      style={{
        backgroundColor: '#f2f2f3',
        paddingTop: '20px',
        paddingBottom: '20px',
      }}
    >
      <Col>
        <SiteHeader
          logo={
            <Link to="/">
              <Logo suffix={<FormattedMessage id="roofing" />} />
            </Link>
          }
          buttons={
            <>
              <Button
                type="bordered"
                comp={Link}
                to="/"
                className="hidden-md hidden-sm hidden-xs"
              >
                <Icon />
                Entrepreneur
              </Button>
              <Button
                type="roofing"
                comp={Link}
                to="/"
                className="hidden-md hidden-sm hidden-xs"
              >
                Connexion
              </Button>
              <Button
                type="ghost"
                comp={Link}
                to="/"
                className="hidden-md hidden-sm hidden-xs withoutMargin"
              >
                Inscription
              </Button>
              <Button type="menu" className="hidden-xl hidden-lg">
                Menu
                <Icon type="menu" />
              </Button>
            </>
          }
        >
          <NavigationLink href="/" isActive className="">
            Fonctionnement
          </NavigationLink>
          <NavigationLink
            comp={Link}
            to="/"
            hasNotifications
            className="hidden-lg hidden-md hidden-sm"
          >
            Types de toitures
          </NavigationLink>
          <NavigationLink
            comp={Link}
            to="/"
            className="hidden-lg hidden-md hidden-sm"
          >
            Certifications
          </NavigationLink>
        </SiteHeader>
      </Col>
    </Row>
  </>
)

SiteHeaderBlock.defaultProps = {
  siteTitle: '',
}

export default SiteHeaderBlock
