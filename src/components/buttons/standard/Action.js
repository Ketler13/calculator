import React, { PropTypes } from 'react'
import Button from '../Button'

const Action = ({label, setAction}) => {
  const onClick = value  => ev => {
    setAction(value)
  }
  return (
    <Button
      label = {label}
      onClick = {onClick(label)}
    />
  )
}

Action.propTypes = {

}

export default Action