import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

class Digit extends Component {
  static propTypes = {

  }

  static contextTypes = {
    keyPressed: PropTypes.string
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextContext.keyPressed === this.props.label) {
      nextProps.setDigit(this.props.label)
    }
  }

  onClick = value  => ev => {
    this.props.setDigit(value)
  }

  render() {
    const {label, setDigit} = this.props

    return (
      <Button
        label = {label}
        onClick = {this.onClick(label)}
      />
    )
  }
}


export default Digit
