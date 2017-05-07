import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const Button = ({label, onClick, ...rest}) => {
  const style = {
    minWidth: '20px',
    width: rest.fullWidth ? '100%' : '25%',
    boxShadow: 'none',
  }
  const buttonStyle = {
    boxShadow: 'inset 0px 1px 6px rgba(0, 0, 0, 0.12), inset 0px 1px 6px rgba(0, 0, 0, 0.12)',
  }

  return (
    <RaisedButton
      style = {style}
      buttonStyle = {buttonStyle}
      label = {label}
      disabled = {rest.disabled}
      onTouchTap = {onClick}
    />
  )
}

Button.propTypes = {

}

export default Button
