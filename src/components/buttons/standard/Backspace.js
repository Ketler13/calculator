import React, { PropTypes } from 'react'
import Button from '../Button'

const Backspace = ({label, deleteLastSymbol, deleteResult}) => {
  const onClick = ev => {
    deleteLastSymbol()
  }
  return (
    <Button
      label = 'C'
      onClick = {onClick}
      fullWidth = {true}
    />
  )
}

Backspace.propTypes = {

}

export default Backspace
