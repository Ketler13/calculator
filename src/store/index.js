import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import equal from '../middlewares/equal'
import keyPress from '../middlewares/keyPress'
import memory from '../middlewares/memory'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(equal, keyPress, memory))

const store = createStore(reducer, {}, enhancer)
//window.store = store

export default store
