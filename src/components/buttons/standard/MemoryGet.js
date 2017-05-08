import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

const MemoryGet = ({currentSymbol, action}) => {
  const onClick = ev => {
    if ( !currentSymbol || isNaN(currentSymbol) ) {
      action()
    }
  }

  return (
    <Button
      label = 'MR'
      onClick = {onClick}
    />
  )
}

MemoryGet.propTypes = {

}

export default MemoryGet
