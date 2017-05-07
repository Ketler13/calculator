import {ADD_KEY_HANDLER, KEY_PRESSED} from '../constants'
import {allowedKeys} from '../helpers'

export default store => next => action => {
  if (action.type !== ADD_KEY_HANDLER) return next(action)
  document.body.addEventListener('keydown', ev => {
    if (allowedKeys.includes(ev.key)) {
      next({
        type: KEY_PRESSED,
        payload: {
          key: ev.key
        }
      })
    }
  })
}
