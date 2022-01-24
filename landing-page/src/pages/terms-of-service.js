import React from 'react'
import { Col, Grid, Row } from 'conecto-ui-components'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'

import LayoutHeader from '../components/LayoutHeader'
import Footer from '../components/Footer'
import SEO from '../components/seo'

const TOSPage = ({ pageContext: { locale, baseLocale } }) => (
  <>
    <LayoutHeader />
    <main className="layout-wrapper">
    <SEO locale={locale} baseLocale={baseLocale} />
    <div id="tos-page">
      <Grid>
        <Row>
          <Col>
            <FormattedMessage
              id="request_tos_confirmation_modal_title"
              tagName="h1"
            />
            <FormattedHTMLMessage id="request_tos_confirmation_modal_text" tagName="span" />
          </Col>
        </Row>
      </Grid>
    </div>
    </main>
    <Footer />
  </>
)

export default TOSPage
