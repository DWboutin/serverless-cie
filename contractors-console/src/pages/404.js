import React from 'react'
import { injectIntl } from 'react-intl'
import { Grid, Row, Col, Button } from 'conecto-ui-components'

import SEO from '../components/seo'
import Layout404 from '../components/Layout404'

import Image404 from '../components/svg/Image404'

import { Link } from '../i18n'

const NotFoundPage = ({ intl, pageContext }) => (
  <Layout404>
    <SEO
      title={intl.formatMessage({ id: 'title_404' })}
      locale={pageContext.locale}
    />
    <Grid>
      <Row
        xl={{
          alignement: 'center',
        }}
        lg={{
          alignement: 'center',
        }}
        md={{
          alignement: 'center',
        }}
        sm={{
          alignement: 'center',
        }}
        xs={{
          alignement: 'center',
        }}
      >
        <Col>
          <Image404 />
          <h1>{intl.formatMessage({ id: 'message_404' })}</h1>
          <div className="buttons">
            <Button comp={Link} to="/dashboard">
              {intl.formatMessage({ id: 'button_404_back_homepage' })}
            </Button>
          </div>
        </Col>
      </Row>
    </Grid>
  </Layout404>
)

export default injectIntl(NotFoundPage)
