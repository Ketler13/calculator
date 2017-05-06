import {EQUAL} from '../constants'

export default store => next => action => {
  if (action.type !== EQUAL) return next(action)
  const expression = store.getState().actions.expression.join('')
  try {
    const result = eval(expression)
    next({...action, type: action.type + '_SUCCESS', result})
  } catch (error) {
    next({...action, type: action.type + '_ERROR', result: error.toString()})
  }
}
