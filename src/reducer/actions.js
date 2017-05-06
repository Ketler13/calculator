import {
         SET_DIGIT, SET_ACTION, DELETE_LAST_SYMBOL, DELETE_RESULT, EQUAL, SET_DOT
       } from '../constants'

const defaultState = {
  currentSymbol: null,
  latestNumberContainsDot: false,
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
        latestNumberContainsDot: false,
        expression: state.expression.concat(payload.value),
        currentSymbol: payload.value
      }

    case SET_DOT:
      return {
        ...state,
        latestNumberContainsDot: true,
        expression: state.expression.concat(payload.value),
        currentSymbol: '.'
      }

    case DELETE_LAST_SYMBOL:
      return {
        ...state,
        expression: state.expression.slice(0, state.expression.length - 1)
      }

    case DELETE_RESULT:
      return defaultState

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
