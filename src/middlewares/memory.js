import {
         ADD_TO_MEMORY, SUBTRACT_FROM_MEMORY, GET_FROM_MEMORY, CLEAR_MEMORY,
         SET_DIGIT
       } from '../constants'

export default store => next => action => {
  switch (action.type) {
    case ADD_TO_MEMORY:
      if (!localStorage.memoryValue) {
        localStorage.setItem('memoryValue', `${action.payload.value}`)
        break
      } else {
        const memoryValue = +localStorage.getItem('memoryValue') + +action.payload.value
        localStorage.setItem('memoryValue', `${memoryValue}`)
        break
      }
    case SUBTRACT_FROM_MEMORY:
      if (!localStorage.memoryValue) {
        localStorage.setItem('memoryValue', `${action.payload.value}`)
        break
      } else {
        const memoryValue = +localStorage.getItem('memoryValue') - +action.payload.value
        localStorage.setItem('memoryValue', `${memoryValue}`)
        break
      }
      next(action)
    case GET_FROM_MEMORY:
      if (localStorage.memoryValue) {
        const value = localStorage.getItem('memoryValue')
        next({
          type: SET_DIGIT,
          payload: {
            value,
            type: 'digit'
          }
        })
      }
      break
    case CLEAR_MEMORY:
      localStorage.clear()
      break
    default:
      next(action)
  }
}
