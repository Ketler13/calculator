import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Convert from './buttons/extended/Convert'

const Currency = (props) => {
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
      <p style = {style.paragraph}>Rate</p>
      <Convert label = 'UAH'/>
      <Convert label = 'USD'/>
    </div>
  )
}

Currency.propTypes = {

}

export default Currency
