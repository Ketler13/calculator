import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {addKeyHandler, getWindowWidth} from '../AC'
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'
import Screen from './Screen'
import Keyboard from './Keyboard'

class AppContainer extends Component {
  static propTypes = {
  }

  componentDidMount() {
    this.props.addKeyHandler()
    this.props.getWindowWidth()
  }

  render() {
    console.log(this.props.width);
    const style = {
      width: (this.props.width > 762) ? '500px' : '100%',
      margin: '0 auto',
    }

    return (
      <Paper style = {style} zDepth={5}>
        <AppBar title = 'Calculator'/>
        <Screen />
        <Keyboard />
      </Paper>
    )
  }
}

export default connect(store => {
  return {
    width: store.user.width
  }
}, {addKeyHandler, getWindowWidth})(AppContainer)
