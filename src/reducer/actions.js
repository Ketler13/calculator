import {
         collectDigitsAndDotsTogether, addFuncToLatestValue,
         changeSignOfLastValue, deleteLastSymbol
        } from '../helpers'
import {
         SET_DIGIT, SET_ACTION, DELETE_LAST_SYMBOL, DELETE_RESULT, EQUAL,
         SET_DOT, SET_FUNC, CHANGE_SIGN, CHANGE_TRIGONOMETRIC_SCALE, SET_BRACKET,
         KEY_PRESSED, GET_COURS, SUCCESS, FAIL
       } from '../constants'

const defaultState = {
  currentSymbol: null,
  currentType: null,
  cours: null,
  latestNumberContainsDot: false,
  trigonometricScale: 'deg',
  keyPressed: null,
  expression: [],
  result: null
}

export default (state = defaultState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_DIGIT:
      return {
        ...state,
        keyPressed: null,
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
        keyPressed: null,
        result: null,
        currentType: payload.type,
        latestNumberContainsDot: false,
        expression: state.expression.concat(payload.value),
        currentSymbol: payload.value
      }

    case SET_DOT:
      return {
        ...state,
        keyPressed: null,
        currentType: payload.type,
        latestNumberContainsDot: true,
        expression: (
          state.currentType === 'digit' ?
          collectDigitsAndDotsTogether(state.expression, payload.value) :
          state.expression.concat(payload.value)
        ),
        currentSymbol: '.'
      }

    case SET_BRACKET:
      return {
        ...state,
        keyPressed: null,
        expression: state.expression.concat(payload.bracket)
      }

    case SET_FUNC:
      return {
        ...state,
        keyPressed: null,
        expression: addFuncToLatestValue(state.expression, payload.func),
      }

    case CHANGE_SIGN:
      return {
        ...state,
        keyPressed: null,
        expression: changeSignOfLastValue(state.expression)
      }

    case CHANGE_TRIGONOMETRIC_SCALE:
      return {
        ...state,
        keyPressed: null,
        trigonometricScale: payload.value
      }

    case DELETE_LAST_SYMBOL:
      return {
        ...state,
        keyPressed: null,
        expression: deleteLastSymbol(state.expression)
      }

    case KEY_PRESSED:
      return {
        ...state,
        keyPressed: payload.key
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

      case GET_COURS + SUCCESS:
        return {
          ...state,
          cours: payload.cours
        }

      case GET_COURS + FAIL:
        return {
          ...state,
          cours: payload.cours
        }
  }
  return defaultState
}
