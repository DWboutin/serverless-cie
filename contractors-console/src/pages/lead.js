import React from 'react'
import { injectIntl } from 'react-intl'
import { Grid } from 'conecto-ui-components'

import LayoutDashboard from '../components/LayoutDashboard'
import LeadSection from '../components/LeadsPage/LeadSection'

import { AuthContext } from '../_helpers/WithAuthPage'

const OpportunitiesPage = ({
  intl,
  location: { pathname },
  pageContext: { locale },
}) => (
  <LayoutDashboard pathname={pathname}>
    <AuthContext.Consumer>
      {context => {
        const { leads, username, contact, organization, refreshLeads } =
          context || {}
        const { opportunities } = leads || []
        const { address } = organization || {}
        const { phone } = contact || {}
        const dealInfosId = pathname.substr(pathname.lastIndexOf('/') + 1)

        return (
          <Grid>
            <LeadSection
              username={username}
              phoneNumber={phone}
              dealInfosId={dealInfosId}
              leads={opportunities}
              address={address}
              locale={locale}
              refreshLeads={refreshLeads}
            />
          </Grid>
        )
      }}
    </AuthContext.Consumer>
  </LayoutDashboard>
)

export default injectIntl(OpportunitiesPage)
