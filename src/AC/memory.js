import {
         ADD_TO_MEMORY, SUBTRACT_FROM_MEMORY, GET_FROM_MEMORY, CLEAR_MEMORY
       } from '../constants'

export function addToMemory(value) {
  return {
    type: ADD_TO_MEMORY,
    payload: {
      value
    }
  }
}

export function subtractFromMemory(value) {
  return {
    type: SUBTRACT_FROM_MEMORY,
    payload: {
      value
    }
  }
}

export function getFromMemory() {
  return {
    type: GET_FROM_MEMORY
  }
}

export function clearMemory() {
  return {
    type: CLEAR_MEMORY
  }
}
