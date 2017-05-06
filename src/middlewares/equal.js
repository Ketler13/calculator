import {EQUAL} from '../constants'
import { fact, functions } from '../helpers'

export default store => next => action => {
  const { sin, cos, tan, ctg, sqrt, revDiv, log, ln, cube, sqr, pow, tenPow } = functions
  const factorial = fact
  if (action.type !== EQUAL) return next(action)
  const expression = store.getState().actions.expression.join('')
  try {
    const result = eval(expression)
    next({...action, type: action.type + '_SUCCESS', result})
  } catch (error) {
    next({...action, type: action.type + '_ERROR', result: error.toString()})
  }
}
