import React from 'react'
import { injectIntl } from 'react-intl'
import { Grid } from 'conecto-ui-components'

import SEO from '../components/seo'
import LayoutDashboard from '../components/LayoutDashboard'
import OpportunitySingle from '../components/OpportunitiesPage/OpportunitySingle'

import { AuthContext } from '../_helpers/WithAuthPage'

const AcceptOpportunityPage = ({
  intl,
  location: { pathname, search },
  pageContext,
}) => (
  <LayoutDashboard pathname={pathname}>
    <AuthContext.Consumer>
      {context => {
        const { username, organization, refreshNotifications } = context || {}
        const { id: organizationId, custom_fields } = organization || {}
        const stripeSource =
          typeof custom_fields !== 'undefined'
            ? custom_fields.stripeSource
            : null

        return (
          <Grid>
            <SEO
              title={intl.formatMessage({
                id: 'dashboardPage_stats_notice_acceptation',
              })}
              locale={pageContext.locale}
            />
            <OpportunitySingle
              username={username}
              organizationId={organizationId}
              stripeSource={stripeSource}
              refreshNotifications={refreshNotifications}
              queryString={search}
            />
          </Grid>
        )
      }}
    </AuthContext.Consumer>
  </LayoutDashboard>
)

export default injectIntl(AcceptOpportunityPage)
