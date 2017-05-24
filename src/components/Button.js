import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  button: {
    borderRadius: "3px",
    backgroundColor: "#3498db",
    padding: "7px 16px",
    width: "100px",
    fontFamily: "YuGo-Bold",
    fontSize: "12px",
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "12px",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#fff",
    ':hover': {
      backgroundColor: "#3182B8"
    }
  }
})

const Button = ({ children, onClick }) => (
  <div className={css(styles.button)} onClick={onClick}>
    {children}
  </div>
)

export default Button
