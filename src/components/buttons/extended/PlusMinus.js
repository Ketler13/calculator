import React, { PropTypes } from 'react'
import Button from '../Button'

const PlusMinus = ({currentSymbol, changeSign}) => {
  const onClick = ev => {
    if (currentSymbol && !isNaN(+currentSymbol)) {
      changeSign()
    }
  }
  return (
    <Button
      label = {'+/-'}
      onClick = {onClick}
    />
  )
}

PlusMinus.propTypes = {

}

export default PlusMinus
