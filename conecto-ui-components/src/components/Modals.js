import React from 'react'

import Grid, { Row, Col } from '../_components/Grid'
import Button from '../_components/Button'
import { ModalButton } from '../_components/Modal'
import notification from '../_components/Notification'
import LoadingBar from '../_components/LoadingBar'

class Modals extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: true,
      })
    }, 2000)
    setTimeout(() => {
      this.setState({
        isLoading: false,
      })
    }, 4000)
  }

  openNotif() {
    notification.open({
      duration: 6,
      placement: 'topRight',
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!')
      },
    })
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <h2 style={{ opacity: 0.7 }}>Modal</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <ModalButton button={<Button>Modal Button text</Button>}>
              Modal content
            </ModalButton>
          </Col>
          <Col>
            <span onClick={this.openNotif}>open notif</span>
          </Col>
        </Row>
        <LoadingBar isLoading={this.state.isLoading} type="roofing" fixed />
      </Grid>
    )
  }
}

Modals.defaultProps = {}

export default Modals
