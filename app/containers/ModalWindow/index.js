import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import { ModalForm } from '../'

class ModalWindow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false
    }
  }

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })

  render() {
    const { addElement, data, options } = this.props
    return (
      <Modal
        trigger={
          <Button onClick={this.handleOpen} positive>
            Add new line
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size="small"
      >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <ModalForm
              options={options}
              addElement={addElement}
              data={data}
              close={this.handleClose}
            />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

ModalWindow.propTypes = {
  data: PropTypes.object,
  addElement: PropTypes.func,
  options: PropTypes.array
}

export default ModalWindow
