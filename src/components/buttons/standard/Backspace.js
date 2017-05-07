import React, { PropTypes } from 'react'
import Button from '../Button'

const Backspace = ({label, result, deleteLastSymbol, deleteResult, expression}) => {
  const onClick = ev => {
    if (result || result !== null) {
      deleteResult()
    } else {
      if (expression.length === 1 && expression[0].length === 1) {
        deleteResult()
      } else {
        deleteLastSymbol()
      }
    }
  }
  return (
    <Button
      label = {(result || result !== null) ? 'Очистить' : 'Стереть'}
      onClick = {onClick}
      fullWidth = {true}
      disabled = {!expression.length}
    />
  )
}

Backspace.propTypes = {

}

export default Backspace
