import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const Screen = ({expression}) => {
  const style = {
    width: '80%',
    height: '50px',
    margin: '10px auto',
    border: 'solid 1px rgb(0, 188, 212)',
    borderRadius: '5px',
    fontSize: '45px',
    textAlign: 'right',
    overflowX: 'hidden',
    direction: 'rtl',
  }
  const screenValue = expression.join('')
  return (
    <div style = {style}>
      {screenValue}
    </div>
  )
}

Screen.propTypes = {

}

export default connect(store => {
  return {
    expression: store.actions.expression
  }
})(Screen)
