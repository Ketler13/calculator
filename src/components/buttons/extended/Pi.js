import React, { PropTypes } from 'react'
import Button from '../Button'

const Pi = ({setPi}) => {
  const onClick = ev => {
    setPi(`${Math.PI}`)
  }
  return (
    <Button
      label = {'\u03C0'}
      onClick = {onClick}
    />
  )
}

Pi.propTypes = {

}

export default Pi
