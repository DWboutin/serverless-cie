import React from 'react'
import { Link } from 'gatsby'
import { FormattedMessage } from 'react-intl'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Logos from '../components/Logos'
import Buttons from '../components/Buttons'
import Icons from '../components/Icons'
import SiteHeaderBlock from '../components/SiteHeaderBlock'
import Forms from '../components/Forms'
import Tabs from '../components/Tabs'
import Display from '../components/Display'
import Modals from '../components/Modals'
import Cards from '../components/Cards'
import Stat from '../components/Stat'

const IndexPage = ({ pageContext }) => (
  <Layout>
    <h1>
      <FormattedMessage id="string1" />
    </h1>
    <Logos />
    <Buttons />
    <Icons />
    <SiteHeaderBlock />
    <Forms />
    <Tabs />
    <Display />
    <Modals />
    <Cards />
    <Stat />
  </Layout>
)

export default IndexPage
