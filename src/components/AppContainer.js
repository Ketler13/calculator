import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'

const AppContainer = (props) => {
  const style = {
    height: '100vh',
  }
  
  return (
      <Paper style = {style} zDepth={1}>
      </Paper>
  )
}

AppContainer.propTypes = {
}

export default AppContainer
