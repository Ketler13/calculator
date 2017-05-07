import {
         collectDigitsAndDotsTogether, addFuncToLatestValue,
         changeSignOfLastValue, deleteLastSymbol
        } from '../helpers'
import {
         SET_DIGIT, SET_ACTION, DELETE_LAST_SYMBOL, DELETE_RESULT, EQUAL,
         SET_DOT, SET_FUNC, CHANGE_SIGN, CHANGE_TRIGONOMETRIC_SCALE
       } from '../constants'

const defaultState = {
  currentSymbol: null,
  currentType: null,
  latestNumberContainsDot: false,
  trigonometricScale: 'deg',
  expression: [],
  result: null
}

export default (state = defaultState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_DIGIT:
      return {
        ...state,
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

    case CHANGE_SIGN:
      return {
        ...state,
        expression: changeSignOfLastValue(state.expression)
      }

    case CHANGE_TRIGONOMETRIC_SCALE:
      return {
        ...state,
        trigonometricScale: payload.value
      }

    case DELETE_LAST_SYMBOL:
      return {
        ...state,
        expression: deleteLastSymbol(state.expression)
      }

    case DELETE_RESULT:
      return defaultState

    case EQUAL + '_SUCCESS':
      return {
        ...defaultState,
        currentType: 'digit',
        currentSymbol: `${action.result}`,
        expression: [`${action.result}`],
        result: action.result
      }

      case EQUAL + '_ERROR':
        return {
          ...defaultState,
          result: action.result,
          expression: [`${action.result}`]
        }
  }
  return defaultState
}
