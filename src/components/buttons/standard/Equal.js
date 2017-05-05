import React, { PropTypes } from 'react'
import Button from '../Button'

const Equal = ({label}) => {
  const onClick = value  => ev => {
    console.log(value)
  }
  return (
    <Button
      label = '='
      onClick = {onClick('equal')}
    />
  )
}

Equal.propTypes = {

}

export default Equal
