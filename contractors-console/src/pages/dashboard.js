import React from 'react'
import { injectIntl } from 'react-intl'

import SEO from '../components/seo'
import LayoutDashboard from '../components/LayoutDashboard'
import CTASection from '../components/DashboardPage/CTASection'
import StatsSection from '../components/DashboardPage/StatsSection'
import RoofingListing from '../components/DashboardPage/RoofingListing'

const DashboardPage = ({ intl, location: { pathname }, pageContext }) => (
  <LayoutDashboard pathname={pathname}>
    <>
      <SEO
        title={intl.formatMessage({
          id: 'layoutDashboard_navigation_link_dashboard',
        })}
        locale={pageContext.locale}
      />
      <CTASection />
      <div className="mobile-switch-order">
        <StatsSection />
        <RoofingListing />
      </div>
    </>
  </LayoutDashboard>
)

export default injectIntl(DashboardPage)
