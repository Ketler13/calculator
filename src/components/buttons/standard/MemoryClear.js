import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

const MemoryClear = ({action}) => {
  const onClick = ev => {
    action()
  }

  return (
    <Button
      label = 'MC'
      onClick = {onClick}
    />
  )
}

MemoryClear.propTypes = {

}

export default MemoryClear
