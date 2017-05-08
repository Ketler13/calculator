import { combineReducers } from 'redux'
import actions from './actions'
import currency from './currency'
import user from './user'

export default combineReducers({
  actions, currency, user
})
