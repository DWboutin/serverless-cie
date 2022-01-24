import React from 'react'
import { shallow, mount, render } from 'enzyme'

import { CardLead } from '../../Card'
import Logo from '../../Logo'
import Button from '../../Button'
import { Checkbox } from '../../Input'
import Accordion, { AccordionPanel } from '../../Accordion'

describe('CardOpportunity', () => {
  it('should match snapshot', () => {
    const onAcceptation = jest.fn()
    const onReject = jest.fn()
    const wrapper = shallow(
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
            src="https://s3.amazonaws.com/dev-static-maps/T-md81q84fk2.png"
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
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot with an accordion', () => {
    const onAcceptation = jest.fn()
    const onReject = jest.fn()
    const wrapper = render(
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
    )

    expect(wrapper).toMatchSnapshot()
  })
})
