import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import FadeModal from 'boron/FadeModal'
import MdClose from 'react-icons/lib/md/close'
import Button from './Button'

const styles = StyleSheet.create({
  modal: {
    borderRadius: "4px",
    border: "solid 1px #dddddd",
  },
  header: {
    padding: "17px 12px",
    fontFamily: "YuGo-Bold",
    fontSize: "15px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "15px",
    letterSpacing: "normal",
    backgroundColor: "#fafafa",
    borderBottom: "solid 1px #dddddd",
    color: "#333",
  },
  icon: {
    float: "right",
    width: "15px",
    height: "15px",
    cursor: "pointer",
  },
  body: {
    padding: "30px",
    fontFamily: "YuGo",
    fontSize: "14px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "14px",
    letterSpacing: "normal",
    backgroundColor: "#fff",
    borderBottom: "solid 1px #dddddd",
    color: "#333",
  },
  footer: {
    textAlign: "right",
    padding: "30px",
    backgroundColor: "#fff",
  },
  buttons: {
    margin: 0,
    padding: 0,
  },
  button: {
    display: "inline-block",
    marginRight: "20px",
    ":last-child": {
      marginRight: 0
    }
  }
})

class Modal extends Component {

  showModal() {
    this.refs.modal.show()
  }

  hideModal() {
    this.refs.modal.hide()
  }

  render() {
    return (
      <FadeModal contentStyle={{backgroundColor: "none"}} ref="modal">
        <div className={css(styles.modal)}>
          <div className={css(styles.header)}>
            header xxxxxxxxx
            <MdClose className={css(styles.icon)} onClick={this.hideModal.bind(this)} />
          </div>
          <div className={css(styles.body)}>
            body xxxxxxxxxxxxxxx
          </div>
          <div className={css(styles.footer)}>
            <ul className={css(styles.buttons)}>
              <li className={css(styles.button)}>
                <Button onClick={this.hideModal.bind(this)}>Close</Button>
              </li>
              <li className={css(styles.button)}>
                <Button onClick={this.hideModal.bind(this)}>Submit</Button>
              </li>
            </ul>
          </div>
        </div>
      </FadeModal>
    )
  }
}

export default Modal
