import React from 'react'

import Layout from '../components/Layout'
import HowItWorks from '../components/HowItWorks'
import CTASection from '../components/CTASection'
import Advantages from '../components/Advantages'
import Materials from '../components/Materials'
import MadeWithConecto from '../components/MadeWithConecto'
import Footer from '../components/Footer'
import SEO from '../components/seo'

const IndexPage = ({ pageContext: { locale, baseLocale } }) => (
  <Layout locale={locale}>
    <SEO locale={locale} baseLocale={baseLocale} />
    <HowItWorks />
    <CTASection
      style={{
        marginTop: '-40px',
      }}
    />
    <Advantages />
    <Materials />
    <MadeWithConecto />
    <CTASection
      style={{
        marginBottom: '-40px',
      }}
    />
    <Footer />
  </Layout>
)

export default IndexPage
