import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Convert from './buttons/extended/Convert'
import Func from './buttons/extended/Func'

const Currency = ({cours, expression, calc}) => {
  const style = {
    container: {
      width: '100%',
      height: '36px',
    },
    paragraph: {
      display: 'inline-block',
      width: '50%',
    }
  }

  return (
    <div style = {style.container}>
      <p style = {style.paragraph}>{cours ? `$/UAH: ${cours}` : 'Loading...'}</p>
      <Convert label = 'UAH' funcType = 'toUAH' cours = {cours}/>
      <Convert label = 'USD' funcType = 'toUSD' cours = {cours}/>
    </div>
  )
}

Currency.propTypes = {

}

export default Currency
