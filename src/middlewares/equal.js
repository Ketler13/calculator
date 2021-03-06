import {EQUAL, CALCULATE_FUNC} from '../constants'
import { fact, functions } from '../helpers'

export default store => next => action => {
  const {
         sin, sind, cos, cosd, tan, tand, ctg, ctgd, sqrt, revDiv, log, ln,
         cube, sqr, pow, tenPow, toUSD, toUAH
        } = functions
  const factorial = fact
  if (action.type !== EQUAL && action.type !== CALCULATE_FUNC) return next(action)
  if (action.type === EQUAL) {
    const expression = store.getState().actions.expression.join('')
    try {
      const result = eval(expression)
      next({...action, type: action.type + '_SUCCESS', result})
    } catch (error) {
      next({...action, type: action.type + '_ERROR', result: error.toString()})
    }
  }
  if (action.type === CALCULATE_FUNC) {
    try {
      const {func, value} = action.payload
      console.log(`${func}(${value})`);
      const result = eval(`${func}(${value})`)
      next({...action, type: EQUAL + '_SUCCESS', result})
    } catch (error) {
      next({...action, type: EQUAL + '_ERROR', result: error.toString()})
    }
  }
}
