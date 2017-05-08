import { combineReducers } from 'redux'
import actions from './actions'
import currency from './currency'

export default combineReducers({
  actions, currency
})
