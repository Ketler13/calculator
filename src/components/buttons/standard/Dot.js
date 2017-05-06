import React, { PropTypes } from 'react'
import Button from '../Button'

const Dot = ({label, currentSymbol, setDot, latestNumberContainsDot}) => {
  const onClick = ev => {
    if (!latestNumberContainsDot) {
      if (currentSymbol === null || isNaN(+currentSymbol)) {
        setDot('0.')
      } else {
        setDot('.')
      }
    }
  }
  return (
    <Button
      label = '.'
      onClick = {onClick}
    />
  )
}

Dot.propTypes = {

}

export default Dot
