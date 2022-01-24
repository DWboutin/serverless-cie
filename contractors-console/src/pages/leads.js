import React from 'react'
import { injectIntl } from 'react-intl'
import { Grid } from 'conecto-ui-components'

import SEO from '../components/seo'
import LayoutDashboard from '../components/LayoutDashboard'
import LeadsSection from '../components/LeadsPage/LeadsSection'

import { AuthContext } from '../_helpers/WithAuthPage'

const LeadsPage = ({
  intl,
  location: { pathname },
  pageContext: { locale },
}) => (
  <LayoutDashboard pathname={pathname}>
    <AuthContext.Consumer>
      {context => {
        const { leads, username, refreshLeads, contact, organization } =
          context || {}
        const { opportunities } = leads || []
        const { address } = organization || {}
        const { phone } = contact || {}

        return (
          <Grid>
            <SEO
              title={intl.formatMessage({
                id: 'layoutDashboard_navigation_link_leads',
              })}
              locale={locale}
            />
            <LeadsSection
              username={username}
              phoneNumber={phone}
              leads={opportunities}
              refreshLeads={refreshLeads}
              address={address}
              locale={locale}
            />
          </Grid>
        )
      }}
    </AuthContext.Consumer>
  </LayoutDashboard>
)

export default injectIntl(LeadsPage)
