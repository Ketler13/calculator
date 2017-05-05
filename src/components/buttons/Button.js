import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const Button = ({label, onClick, ...rest}) => {
  const style = {
    minWidth: '20px',
    width: rest.fullWidth ? '100%' : '25%',
  }

  return (
    <RaisedButton
      style = {style}
      label = {label}
      onTouchTap = {onClick}
    />
  )
}

Button.propTypes = {

}

export default Button
