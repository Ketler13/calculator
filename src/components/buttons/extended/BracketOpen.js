import React, { PropTypes } from 'react'
import Button from '../Button'

const BracketOpen = ({label, currentSymbol, setFunc}) => {
  const onClick = value  => ev => {
    if (currentSymbol && !isNaN(+currentSymbol) || label === '-' && !currentSymbol) {
      setFunc(value)
    }
  }
  return (
    <Button
      label = '('
      onClick = {onClick(label)}
    />
  )
}

BracketOpen.propTypes = {

}

export default BracketOpen
