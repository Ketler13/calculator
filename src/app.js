import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './components/AppContainer'
import store from './store'
import { Provider } from 'react-redux'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <Provider store = {store}>
        <AppContainer />
    </Provider>
  </MuiThemeProvider>, document.getElementById('container'))
