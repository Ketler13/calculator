import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'
import Screen from './Screen'
import Keyboard from './Keyboard'

const AppContainer = (props) => {
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

AppContainer.propTypes = {
}

export default AppContainer
