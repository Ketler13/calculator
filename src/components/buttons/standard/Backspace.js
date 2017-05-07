import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

class Backspace extends Component {
  static propTypes = {

  }

  static contextTypes = {
    keyPressed: PropTypes.string
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextContext.keyPressed === 'Backspace') {
      const {result, expression, deleteLastSymbol, deleteResult} = this.props
      if (result || result !== null) {
        deleteResult()
      } else {
        if (expression.length === 1 && expression[0].length === 1) {
          deleteResult()
        } else {
          deleteLastSymbol()
        }
      }
    }
  }

  onClick = ev => {
    const {result, expression, deleteLastSymbol, deleteResult} = this.props
    if (result || result !== null) {
      deleteResult()
    } else {
      if (expression.length === 1 && expression[0].length === 1) {
        deleteResult()
      } else {
        deleteLastSymbol()
      }
    }
  }

  render() {
    const {result, expression} = this.props
    return (
      <Button
        label = {(result || result !== null) ? 'Очистить' : 'Стереть'}
        onClick = {this.onClick}
        fullWidth = {true}
        disabled = {!expression.length}
      />
    )
  }
}

export default Backspace
