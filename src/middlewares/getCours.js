import {GET_COURS, SUCCESS, FAIL} from '../constants'
import axios from 'axios'

export default store => next => action => {
  if (action.type !== GET_COURS) return next(action)
  axios({
    method: 'get',
    url: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
  })
  .then(response => {
    let cours
    response.data.forEach(elem => {
      if (elem.ccy === 'USD' && elem.base_ccy === 'UAH') cours = elem.sale
    })
    next({type: GET_COURS + SUCCESS, payload: {cours}})
  })
  .catch(error => {
    next({type: GET_COURS + FAIL, payload: {cours: 'Failed'}})
  });
}
