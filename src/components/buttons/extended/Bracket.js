import React, { PropTypes } from 'react'
import Button from '../Button'

const BracketOpen = ({label, currentSymbol, setBracket}) => {
  const onClick = label  => ev => {
    if (!currentSymbol || isNaN(+currentSymbol)) {
      setBracket(label)
    }
  }
  return (
    <Button
      label = {label}
      onClick = {onClick(label)}
    />
  )
}

BracketOpen.propTypes = {

}

export default BracketOpen
