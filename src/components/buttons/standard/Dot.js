import React, { PropTypes } from 'react'
import Button from '../Button'

const Dot = ({label}) => {
  const onClick = value  => ev => {
    console.log(value)
  }
  return (
    <Button
      label = '.'
      onClick = {onClick('dot')}
    />
  )
}

Dot.propTypes = {

}

export default Dot
