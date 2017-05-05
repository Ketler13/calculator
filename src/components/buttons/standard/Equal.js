import React, { PropTypes } from 'react'
import Button from '../Button'

const Equal = ({label, equal}) => {
  return (
    <Button
      label = '='
      onClick = {equal}
    />
  )
}

Equal.propTypes = {

}

export default Equal
