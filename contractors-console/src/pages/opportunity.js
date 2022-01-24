import React from 'react'
import moment from 'moment'
import { injectIntl } from 'react-intl'
import { Grid } from 'conecto-ui-components'

import LayoutDashboard from '../components/LayoutDashboard'
import OpportunitySection from '../components/OpportunitiesPage/OpportunitySection'
import EmptyOpportunitiesSection from '../components/OpportunitiesPage/EmptyOpportunitiesSection'

import { AuthContext } from '../_helpers/WithAuthPage'
import SEO from '../components/seo'

const OpportunityPage = ({ intl, location: { pathname }, pageContext }) => (
  <LayoutDashboard pathname={pathname}>
    <AuthContext.Consumer>
      {context => {
        const { notifications, username, organization, refreshNotifications } =
          context || {}
        const { opportunities } = notifications || []
        const { id: organizationId, custom_fields } = organization || {}
        const stripeSource =
          typeof custom_fields !== 'undefined'
            ? custom_fields.stripeSource
            : null
        const dealInfosId = pathname.substr(pathname.lastIndexOf('/') + 1)
        const opportunity = opportunities
          ? opportunities.find(
              opportunity => opportunity.dealInfosId === dealInfosId
            )
          : null

        return (
          <Grid>
            <SEO
              title={intl.formatMessage({
                id: 'layoutDashboard_navigation_link_opportunities',
              })}
              locale={pageContext.locale}
            />
            {!opportunity && <EmptyOpportunitiesSection />}
            {opportunity && (
              <OpportunitySection
                username={username}
                opportunity={opportunity}
                organizationId={organizationId}
                stripeSource={stripeSource}
                refreshNotifications={refreshNotifications}
              />
            )}
          </Grid>
        )
      }}
    </AuthContext.Consumer>
  </LayoutDashboard>
)

export default injectIntl(OpportunityPage)
