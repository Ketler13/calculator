import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import equal from '../middlewares/equal'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(equal))

const store = createStore(reducer, {}, enhancer)
//window.store = store

export default store
