import {
         SET_DIGIT, SET_ACTION, SET_DOT, DELETE_LAST_SYMBOL, DELETE_RESULT,
         EQUAL, SET_FUNC, CALCULATE_FUNC, CHANGE_SIGN, CHANGE_TRIGONOMETRIC_SCALE,
         OPEN_BRACKET, CLOSE_BRACKET, SET_BRACKET
       } from '../constants'

export function setDigit(value) {
  return {
    type: SET_DIGIT,
    payload: {
      value,
      type: 'digit'
    }
  }
}

export function setAction(value) {
  return {
    type: SET_ACTION,
    payload: {
      value,
      type: 'action'
    }
  }
}

export function setDot(value) {
  return {
    type: SET_DOT,
    payload: {
      value,
      type: 'digit'
    }
  }
}

export function openBracket() {
  return {
    type: OPEN_BRACKET
  }
}

export function closeBracket() {
  return {
    type: CLOSE_BRACKET
  }
}

export function setBracket(bracket) {
  return {
    type: SET_BRACKET,
    payload: {
      bracket
    }
  }
}

export function changeSign() {
  return {
    type: CHANGE_SIGN
  }
}

export function changeTrigonometricScale(value) {
  return {
    type: CHANGE_TRIGONOMETRIC_SCALE,
    payload: {
      value
    }
  }
}

export function setFunc(func) {
  return {
    type: SET_FUNC,
    payload: {
      func
    }
  }
}

export function calculateFunc(func, value) {
  return {
    type: CALCULATE_FUNC,
    payload: {
      func, value
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
