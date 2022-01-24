import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

import { Link } from '../i18n'

import './styles.scss'
import Accordion, { AccordionPanel } from '../_components/Accordion'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }

    this.handleModalOpen = this.handleModalOpen.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
  }

  handleModalOpen(e) {
    const eventPosition = e.target.getBoundingClientRect()

    this.setState({
      isOpen: true,
      position: {
        top: `${eventPosition.y}px`,
        left: `${eventPosition.x}px`,
      },
    })
  }

  handleModalClose() {
    this.setState({
      isOpen: false,
    })
  }

  render() {
    const { pageContext } = this.props

    return (
      <Layout>
        <SEO
          lang={pageContext.locale}
          title="Home"
          keywords={['gatsby', 'application', 'react']}
        />
        <h1>
          <FormattedMessage id="string1" />
        </h1>
        <Link to="kitchen-sink">Kitchen Sink</Link>

        <div>
          <Accordion closed>
            <AccordionPanel title="Test">Content</AccordionPanel>
          </Accordion>
        </div>
      </Layout>
    )
  }
}

export default injectIntl(IndexPage)
