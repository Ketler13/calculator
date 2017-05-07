import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

class Action extends Component {
  static propTypes = {

  }

  static contextTypes = {
    keyPressed: PropTypes.string
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextContext.keyPressed === this.props.label) {
      nextProps.setAction(` ${this.props.label} `)
    }
  }

  onClick = value  => ev => {
    if (this.props.currentSymbol && !isNaN(+this.props.currentSymbol)) {
      this.props.setAction(value)
    }
  }

  render() {
    const {label, currentSymbol} = this.props
    return (
      <Button
        label = {label}
        onClick = {this.onClick(` ${label} `)}
      />
    )
  }
}

export default Action
