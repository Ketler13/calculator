import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

class Dot extends Component {
  static propTypes = {

  }

  static contextTypes = {
    keyPressed: PropTypes.string
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextContext.keyPressed === '.') {
      const {currentSymbol, latestNumberContainsDot, setDot} = this.props
      if (!latestNumberContainsDot) {
        if (currentSymbol === null || isNaN(+currentSymbol)) {
          setDot('0.')
        } else {
          setDot('.')
        }
      }
    }
  }

  onClick = ev => {
    const {currentSymbol, latestNumberContainsDot, setDot} = this.props
    if (!latestNumberContainsDot) {
      if (currentSymbol === null || isNaN(+currentSymbol)) {
        setDot('0.')
      } else {
        setDot('.')
      }
    }
  }
  render() {
    return (
      <Button
        label = '.'
        onClick = {this.onClick}
      />
    )
  }
}

export default Dot
