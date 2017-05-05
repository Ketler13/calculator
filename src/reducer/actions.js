import {
         SET_DIGIT, SET_ACTION, DELETE_LAST_SYMBOL, DELETE_RESULT, EQUAL
       } from '../constants'

const defaultState = {
  currentSymbol: null,
  expression: [],
  result: null
}

export default (state = defaultState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_DIGIT:
      return {
        ...state,
        result: null,
        expression: state.expression.concat(payload.value),
        currentSymbol: payload.value
      }

    case SET_ACTION:
      return {
        ...state,
        result: null,
        expression: state.expression.concat(payload.value),
        currentSymbol: payload.value
      }

    case DELETE_LAST_SYMBOL:
      return {
        ...state,
        expression: state.expression.slice(0, state.expression.length - 1)
      }

    case EQUAL + '_SUCCESS':
      return {
        ...defaultState,
        result: action.result
      }

      case EQUAL + '_ERROR':
        return {
          ...defaultState,
          result: action.result
        }
  }
  return defaultState
}
