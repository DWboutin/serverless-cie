import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Grid, Row, Col } from 'conecto-ui-components'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "big-red-house.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    imageTwo: file(relativePath: { eq: "commercial-flat-roofing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Materials = props => (
  <div id="materials" {...props}>
    <StaticQuery
      query={pageQuery}
      render={({ imageOne, imageTwo }) => (
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
          >
            <Col
              xl={{
                span: 8,
              }}
              lg={{
                span: 8,
              }}
              md={{
                span: 8,
              }}
              sm={{
                span: 12,
              }}
              xs={{
                span: 12,
              }}
            >
              <FormattedMessage id="materialsSection_title" tagName="h2" />
            </Col>
          </Row>
          <Row>
            <Col
              xl={{
                span: 6,
              }}
              lg={{
                span: 6,
              }}
              md={{
                span: 6,
              }}
              sm={{
                span: 12,
              }}
              xs={{
                span: 12,
              }}
            >
              <div className="image-container">
                <Img
                  fluid={imageOne.childImageSharp.fluid}
                  className="circle-image"
                />
              </div>
              <div className="text-content">
                <FormattedMessage
                  id="materialsSection_material1_title"
                  tagName="h3"
                />
                <FormattedMessage
                  id="materialsSection_material1_text"
                  tagName="p"
                />
              </div>
            </Col>
            <Col
              xl={{
                span: 6,
              }}
              lg={{
                span: 6,
              }}
              md={{
                span: 6,
              }}
              sm={{
                span: 12,
              }}
              xs={{
                span: 12,
              }}
            >
              <div className="image-container">
                <Img
                  fluid={imageTwo.childImageSharp.fluid}
                  className="circle-image"
                />
              </div>
              <div className="text-content">
                <FormattedMessage
                  id="materialsSection_material2_title"
                  tagName="h3"
                />
                <FormattedMessage
                  id="materialsSection_material2_text"
                  tagName="p"
                />
              </div>
            </Col>
          </Row>
        </Grid>
      )}
    />
  </div>
)

Materials.propTypes = {}

export default Materials
