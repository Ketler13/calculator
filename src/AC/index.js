import { SET_DIGIT, DELETE_LAST_SYMBOL, DELETE_RESULT, SET_ACTION } from '../constants'

export function setDigit(value) {
  return {
    type: SET_DIGIT,
    payload: {
      value
    }
  }
}

export function setAction(value) {
  return {
    type: SET_ACTION,
    payload: {
      value
    }
  }
}

export function deleteLastSymbol() {
  return {
    type: DELETE_LAST_SYMBOL
  }
}

export function deleteResult() {
  return {
    type: DELETE_RESULT
  }
}
