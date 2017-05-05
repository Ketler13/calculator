import React, { PropTypes } from 'react'
import Button from '../Button'

const Action = ({label}) => {
  const onClick = value  => ev => {
    console.log(value)
  }
  return (
    <Button
      label = {label}
      onClick = {onClick('action')}
    />
  )
}

Action.propTypes = {

}

export default Action
