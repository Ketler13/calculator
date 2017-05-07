import React, { PropTypes } from 'react'
import Button from '../Button'

const Action = ({label, currentSymbol, setAction}) => {
  const onClick = value  => ev => {
    if (currentSymbol && !isNaN(+currentSymbol)) {
      setAction(value)
    }
  }
  return (
    <Button
      label = {label}
      onClick = {onClick(` ${label} `)}
    />
  )
}

Action.propTypes = {

}

export default Action
