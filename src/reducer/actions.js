import { collectDigitsAndDotsTogether, addFuncToLatestValue } from '../helpers'
import {
         SET_DIGIT, SET_ACTION, DELETE_LAST_SYMBOL, DELETE_RESULT, EQUAL,
         SET_DOT, SET_FUNC
       } from '../constants'

const defaultState = {
  currentSymbol: null,
  currentType: null,
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
        currentType: payload.type,
        expression: (
          state.currentType === 'digit' ?
          collectDigitsAndDotsTogether(state.expression, payload.value) :
          state.expression.concat(payload.value)
        ),
        currentSymbol: payload.value
      }

    case SET_ACTION:
      return {
        ...state,
        result: null,
        currentType: payload.type,
        latestNumberContainsDot: false,
        expression: state.expression.concat(payload.value),
        currentSymbol: payload.value
      }

    case SET_DOT:
      return {
        ...state,
        currentType: payload.type,
        latestNumberContainsDot: true,
        expression: (
          state.currentType === 'digit' ?
          collectDigitsAndDotsTogether(state.expression, payload.value) :
          state.expression.concat(payload.value)
        ),
        currentSymbol: '.'
      }

    case SET_FUNC:
      return {
        ...state,
        expression: addFuncToLatestValue(state.expression, payload.func),
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
