import React, { PropTypes } from 'react'
import Button from '../Button'

const Backspace = ({label, result, deleteLastSymbol, deleteResult}) => {
  const onClick = ev => {
    if (result || result !== null) {
      deleteResult()
    } else {
      deleteLastSymbol()
    }
  }
  return (
    <Button
      label = {(result || result !== null) ? 'Очистить' : 'Стереть'}
      onClick = {onClick}
      fullWidth = {true}
    />
  )
}

Backspace.propTypes = {

}

export default Backspace
