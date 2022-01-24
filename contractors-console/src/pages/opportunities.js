import React from 'react'
import { injectIntl } from 'react-intl'
import { Grid } from 'conecto-ui-components'

import SEO from '../components/seo'
import LayoutDashboard from '../components/LayoutDashboard'
import OpportunitiesSection from '../components/OpportunitiesPage/OpportunitiesSection'

import { AuthContext } from '../_helpers/WithAuthPage'

const OpportunitiesPage = ({ intl, location: { pathname }, pageContext }) => (
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

        return (
          <Grid>
            <SEO
              title={intl.formatMessage({
                id: 'layoutDashboard_navigation_link_opportunities',
              })}
              locale={pageContext.locale}
            />
            <OpportunitiesSection
              username={username}
              opportunities={opportunities}
              organizationId={organizationId}
              stripeSource={stripeSource}
              refreshNotifications={refreshNotifications}
            />
          </Grid>
        )
      }}
    </AuthContext.Consumer>
  </LayoutDashboard>
)

export default injectIntl(OpportunitiesPage)
