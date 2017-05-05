import React, { PropTypes } from 'react'
import Button from '../Button'

const Backspace = ({label}) => {
  const onClick = value  => ev => {
    console.log(value)
  }
  return (
    <Button
      label = 'C'
      onClick = {onClick('Backspace')}
      fullWidth = {true}
    />
  )
}

Backspace.propTypes = {

}

export default Backspace
