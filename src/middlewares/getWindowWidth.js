import {GET_WINDOW_WIDTH} from '../constants'

export default store => next => action => {
  if (action.type !== GET_WINDOW_WIDTH) return next(action)
  const width = window.innerWidth
  next({...action, payload: {width}})
}
