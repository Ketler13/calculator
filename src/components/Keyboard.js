import React, { PropTypes } from 'react'
import StandardKbd from './StandardKbd'
import ExtendedKbd from './ExtendedKbd'

const Keyboard = (props) => {
  const style = {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
  return (
    <div style = {style}>
      <StandardKbd />
    </div>
  )
}

Keyboard.propTypes = {

}

export default Keyboard
