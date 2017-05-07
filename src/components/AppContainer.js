import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {addKeyHandler} from '../AC'
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'
import Screen from './Screen'
import Keyboard from './Keyboard'

class AppContainer extends Component {
  static propTypes = {
  }

  componentDidMount() {
    this.props.addKeyHandler()
  }

  render() {
    const style = {
      maxWidth: '500px',
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

export default connect(null, {addKeyHandler})(AppContainer)
