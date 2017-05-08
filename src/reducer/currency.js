import { GET_COURS, SUCCESS, FAIL } from '../constants'

const defaultState = {
  cours: null
}

export default (state = defaultState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_COURS + SUCCESS:
      return {
        cours: payload.cours
      }

    case GET_COURS + FAIL:
      return {
        cours: payload.cours
      }
  }
  return state
}
