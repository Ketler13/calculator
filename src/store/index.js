import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import equal from '../middlewares/equal'
import keyPress from '../middlewares/keyPress'
import memory from '../middlewares/memory'
import getCours from '../middlewares/getCours'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(equal, keyPress, memory, getCours))

const store = createStore(reducer, {}, enhancer)
//window.store = store

export default store
