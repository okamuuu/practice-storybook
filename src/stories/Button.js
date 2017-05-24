import React from 'react'
import Button from '../components/Button'

const ButtonStory = ({ children, onClick }) => (
  <div style={{margin: "30px"}}>
    <Button children={children} onClick={onClick} />
  </div>
)

export default ButtonStory
