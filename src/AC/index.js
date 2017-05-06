import {
         SET_DIGIT, SET_ACTION, SET_DOT, DELETE_LAST_SYMBOL, DELETE_RESULT,  EQUAL
       } from '../constants'

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

export function setDot(value) {
  return {
    type: SET_DOT,
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

export function equal() {
  return {
    type: EQUAL
  }
}
