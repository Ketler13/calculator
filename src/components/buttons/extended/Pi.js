import React, { PropTypes } from 'react'
import Button from '../Button'

const Pi = ({label, currentSymbol, funcType, setFunc}) => {
  const onClick = value  => ev => {
    if (currentSymbol && !isNaN(+currentSymbol) || label === '-' && !currentSymbol) {
      setFunc(value)
    }
  }
  return (
    <Button
      label = {'\u03C0'}
      onClick = {onClick(label)}
    />
  )
}

Pi.propTypes = {

}

export default Pi
