import { SET_DIGIT, SET_ACTION, DELETE_LAST_SYMBOL, DELETE_RESULT } from '../constants'

const defaultState = {
  currentValue: null,
  expression: []
}

export default (state = defaultState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_DIGIT:
      return {
        ...state,
        expression: state.expression.concat(payload.value),
        currentValue: state.currentValue ? state.currentValue + payload.value : payload.value
      }

    case SET_ACTION:
      return {
        ...state,
        expression: state.expression.concat(payload.value)
      }

    case DELETE_LAST_SYMBOL:
      return state
  }
  return defaultState
}
