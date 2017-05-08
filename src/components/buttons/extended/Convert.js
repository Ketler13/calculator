import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

const Convert = ({label, cours, funcType}) => {
  const onClick = value => ev => {
    funcType()
  }
  return (
    <Button
      label = {label}
      onClick = {onClick(funcType)}
    />
  )
}

Convert.propTypes = {

}

export default Convert
