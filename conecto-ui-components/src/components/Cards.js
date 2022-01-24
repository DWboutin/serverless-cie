import React from 'react'

import Grid, { Row, Col } from '../_components/Grid'
import Accordion, { AccordionPanel } from '../_components/Accordion'
import Card, {
  CardsSwiper,
  CTACard,
  CardOpportunity,
  CardLead,
} from '../_components/Card'
import Logo from '../_components/Logo'
import Icon from '../_components/Icon'
import Button from '../_components/Button'
import { ContractorSimple } from '../_components/SVG'
import { Checkbox } from '../_components/Input'

const Cards = () => (
  <Grid>
    <Row>
      <Col>
        <h2 style={{ opacity: 0.7 }}>Cards</h2>
      </Col>
    </Row>
    <Row>
      <Col
        xs={{
          span: 12,
        }}
        sm={{
          span: 12,
        }}
        md={{
          span: 6,
        }}
        lg={{
          span: 6,
        }}
        xl={{
          span: 6,
        }}
      >
        <h3 style={{ opacity: 0.6, marginBottom: '40px' }}>Default</h3>
        <Card>Test card content</Card>
      </Col>
      <Col
        xs={{
          span: 12,
        }}
        sm={{
          span: 12,
        }}
        md={{
          span: 6,
        }}
        lg={{
          span: 6,
        }}
        xl={{
          span: 6,
        }}
      >
        <h3 style={{ opacity: 0.6, marginBottom: '40px' }}>With icon</h3>
        <Card withIcon icon={<Icon type="colored-flag" />}>
          Test card content
        </Card>
      </Col>
      <Col
        xs={{
          span: 12,
        }}
        sm={{
          span: 12,
        }}
        md={{
          span: 6,
        }}
        lg={{
          span: 6,
        }}
        xl={{
          span: 6,
        }}
      >
        <h3 style={{ opacity: 0.6, marginBottom: '40px' }}>type="shadowed"</h3>
        <Card type="shadowed">Test card content</Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <h3 style={{ opacity: 0.6 }}>Cards Swiper</h3>
        <CardsSwiper
          id="swiper"
          withIcons
          options={{
            slidesPerView: 4,
          }}
        >
          <Card withIcon icon={<Icon type="colored-flag" />}>
            Test 1
          </Card>
          <Card withIcon icon={<Icon type="colored-flag" />}>
            Test 2
          </Card>
          <Card withIcon icon={<Icon type="colored-flag" />}>
            Test 3
          </Card>
        </CardsSwiper>
      </Col>
    </Row>
    <Row>
      <Col>
        <h3 style={{ opacity: 0.6 }}>CTACard</h3>
      </Col>
    </Row>
    <Row
      xs={{
        alignement: 'center',
      }}
      sm={{
        alignement: 'center',
      }}
      md={{
        alignement: 'center',
      }}
      lg={{
        alignement: 'center',
      }}
      xl={{
        alignement: 'center',
      }}
    >
      <Col
        xs={{
          span: 10,
        }}
        sm={{
          span: 10,
        }}
        md={{
          span: 10,
        }}
        lg={{
          span: 10,
        }}
        xl={{
          span: 10,
        }}
        style={{
          paddingTop: '50px',
          paddingBottom: '50px',
        }}
      >
        <CTACard
          button={<Button>My button here</Button>}
          image={<ContractorSimple />}
          withOverlap
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          interdum dolor at mattis volutpat. Mauris vitae ex euismod, tincidunt
          leo id, sodales dui. Integer tristique eros vel velit varius, eget
          consectetur leo accumsan.
        </CTACard>
      </Col>
      <Col
        xs={{
          span: 10,
        }}
        sm={{
          span: 10,
        }}
        md={{
          span: 10,
        }}
        lg={{
          span: 10,
        }}
        xl={{
          span: 10,
        }}
        style={{
          paddingTop: '50px',
          paddingBottom: '50px',
        }}
      >
        <CardOpportunity
          logo={<Logo type="roofing" suffix="roofing" />}
          img={
            <img
              src="https://s3.amazonaws.com/dev-static-maps/R-VP6YPN7PTN.png"
              alt="test"
            />
          }
          accepted={true}
          buttons={
            <>
              <Button type="bordered" handleClick={() => {}}>
                Reject
              </Button>
              <Button handleClick={() => {}}>Accept</Button>
            </>
          }
          opportunityId="T-19-8KQ209Q1"
          opportunityDate="Soumise il y a 2 heures"
          opportunityRemainingPlace="2 places restantes"
          labelCity="Lieu du chantier"
          labelJobType="Type de toiture"
          labelJobTypeSpecific="Type de pente"
          valueCity="Quebec"
          valueJobType="Bardeau Asphalt"
          valueJobTypeSpecific="Open Gable"
          valueMoreInfosAccordion={
            <Accordion closed>
              <AccordionPanel title="Test">Content</AccordionPanel>
            </Accordion>
          }
        />
      </Col>
      <Col
        xs={{
          span: 10,
        }}
        sm={{
          span: 10,
        }}
        md={{
          span: 10,
        }}
        lg={{
          span: 10,
        }}
        xl={{
          span: 10,
        }}
        style={{
          paddingTop: '50px',
          paddingBottom: '50px',
        }}
      >
        <CardLead
          logo={<Logo type="roofing" suffix="roofing" />}
          buttons={
            <>
              <div>
                <Button type="bordered" handleClick={() => {}}>
                  Reject
                </Button>
              </div>
              <div>
                <Button handleClick={() => {}}>Accept</Button>
              </div>
            </>
          }
          checkboxes={
            <>
              <Checkbox id="test1" name="test1" label="test1" disabled />
              <Checkbox
                id="test2"
                name="test2"
                label="test2"
                value={true}
                checked
                disabled
              />
              <Checkbox id="test3" name="test3" label="test3" disabled />
            </>
          }
          img={
            <img
              src="https://s3.amazonaws.com/dev-static-maps/R-VP6YPN7PTN.png"
              alt="test"
            />
          }
          requester="Mike Bout"
          opportunityId="T-19-8KQ209Q1"
          opportunityDate="Soumise il y a 2 heures"
          opportunityRemainingPlace="2 places restantes"
          labelCity="Lieu du chantier"
          labelJobType="Type de toiture"
          labelJobTypeSpecific="Type de pente"
          labelRequester="Demandeur"
          labelContactPreference="Préférence de contact"
          valueCity="Quebec"
          valueJobType="Bardeau Asphalt"
          valueJobTypeSpecific="Open Gable"
          latitude={10.12345}
          longitude={-54.32101}
          valueMoreInfosAccordion={
            <Accordion closed>
              <AccordionPanel title="Test">Content</AccordionPanel>
            </Accordion>
          }
        />
      </Col>
    </Row>
  </Grid>
)

Cards.defaultProps = {}

export default Cards
