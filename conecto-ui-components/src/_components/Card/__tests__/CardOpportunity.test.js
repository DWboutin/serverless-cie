import React from 'react'
import { shallow, mount, render } from 'enzyme'

import { CardOpportunity } from '../../Card'
import Logo from '../../Logo'
import Button from '../../Button'
import Accordion, { AccordionPanel } from '../../Accordion'

describe('CardOpportunity', () => {
  it('should match snapshot', () => {
    const onAcceptation = jest.fn()
    const onReject = jest.fn()
    const wrapper = shallow(
      <CardOpportunity
        img={
          <img
            src="https://s3.amazonaws.com/dev-static-maps/R-VP6YPN7PTN.png"
            alt="test"
          />
        }
        logo={<Logo type="roofing" suffix="roofing" />}
        accepted={true}
        buttons={
          <>
            <Button type="bordered" handleClick={onReject}>
              Reject
            </Button>
            <Button handleClick={onAcceptation}>Accept</Button>
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
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot with an accordion', () => {
    const onAcceptation = jest.fn()
    const onReject = jest.fn()
    const wrapper = render(
      <CardOpportunity
        img={
          <img
            src="https://s3.amazonaws.com/dev-static-maps/R-VP6YPN7PTN.png"
            alt="test"
          />
        }
        logo={<Logo type="roofing" suffix="roofing" />}
        accepted={true}
        buttons={
          <>
            <Button type="bordered" handleClick={onReject}>
              Reject
            </Button>
            <Button handleClick={onAcceptation}>Accept</Button>
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
    )

    expect(wrapper).toMatchSnapshot()
  })
})
