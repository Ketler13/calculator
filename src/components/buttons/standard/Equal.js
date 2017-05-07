import React, { Component} from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

class Equal extends Component {
  static propTypes = {

  }

  static contextTypes = {
    keyPressed: PropTypes.string
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextContext.keyPressed === '=' || nextContext.keyPressed === 'Enter') {
      nextProps.equal()
    }
  }

  render() {
    return (
      <Button
        label = '='
        onClick = {this.props.equal}
      />
    )
  }
}

export default Equal
