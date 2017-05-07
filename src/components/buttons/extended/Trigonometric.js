import React from 'react'
import PropTypes from 'prop-types'
import Func from './Func'

const Trigonometric = ({label, funcType, scale}) => {
  return (
    <Func
      label = {label}
      funcType = {scale === 'deg' ? `${funcType}d` : funcType}
    />
  )
}

Trigonometric.propTypes = {

}


export default Trigonometric
