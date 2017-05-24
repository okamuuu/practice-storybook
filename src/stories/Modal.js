import React, { Component } from 'react'
import Modal from '../components/Modal'

class ModalStory extends Component {

  showModal() {
    this.refs.modal.showModal()
  }

  render() {
    return (
      <div>
        <button onClick={this.showModal.bind(this)}>Open</button>
        <Modal ref="modal" />
      </div>
    )
  }
}

export default ModalStory

