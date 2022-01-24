/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import { FormattedMessage } from 'react-intl'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Grid, Row, Col, Icon, Card, CardsSwiper } from 'conecto-ui-components'

const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "commercial-flat-roofing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    imageTwo: file(relativePath: { eq: "big-red-house.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    imageThree: file(relativePath: { eq: "flat-roofing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    imageFour: file(relativePath: { eq: "toiture-bloc-appartement.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const MadeWithContecto = props => (
  <div id="made-with-conecto">
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
        <Col
          xl={{
            span: 6,
          }}
          lg={{
            span: 6,
          }}
          md={{
            span: 8,
          }}
          sm={{
            span: 10,
          }}
          xs={{
            span: 10,
          }}
        >
          <FormattedMessage id="madeWithConecto" tagName="h2" />
          <FormattedMessage id="madeWithConecto_text" tagName="p" />
        </Col>
      </Row>
      <Row className="cards-row">
        <Col>
          <StaticQuery
            query={pageQuery}
            render={({ imageOne, imageTwo, imageThree, imageFour }) => (
              <CardsSwiper
                id="made-with-conecto-swiper"
                options={{
                  slidesPerView: 4,
                  breakpoints: {
                    576: {
                      slidesPerView: 'auto',
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    992: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1239: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                  },
                }}
              >
                <Card>
                  <Img fluid={imageOne.childImageSharp.fluid} />
                  {/*<div className="city">*/}
                    {/*<Icon type="marker" />*/}
                    {/*<span className="text">Châteauguay</span>*/}
                  {/*</div>*/}
                </Card>
                <Card>
                  <Img fluid={imageTwo.childImageSharp.fluid} />
                  {/*<div className="city">*/}
                    {/*<Icon type="marker" />*/}
                    {/*<span className="text">Châteauguay</span>*/}
                  {/*</div>*/}
                </Card>
                <Card>
                  <Img fluid={imageThree.childImageSharp.fluid} />
                  {/*<div className="city">*/}
                    {/*<Icon type="marker" />*/}
                    {/*<span className="text">Châteauguay</span>*/}
                  {/*</div>*/}
                </Card>
                <Card>
                  <Img fluid={imageFour.childImageSharp.fluid} />
                  {/*<div className="city">*/}
                    {/*<Icon type="marker" />*/}
                    {/*<span className="text">Châteauguay</span>*/}
                  {/*</div>*/}
                </Card>
              </CardsSwiper>
            )}
          />
        </Col>
      </Row>
    </Grid>
  </div>
)

MadeWithContecto.propTypes = {}

export default MadeWithContecto
