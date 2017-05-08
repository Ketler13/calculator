import { GET_WINDOW_WIDTH } from '../constants'

const defaultState = {
  width: 960
}

export default (state = defaultState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_WINDOW_WIDTH:
      return {
        width: payload.width
      }
  }
  return state
}
