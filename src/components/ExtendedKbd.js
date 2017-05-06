import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {setFunc} from '../AC'
import Func from './buttons/extended/Func'
import Checkbox from './buttons/extended/Checkbox'
import BracketOpen from './buttons/extended/BracketOpen'
import BracketClose from './buttons/extended/BracketClose'
import Pi from './buttons/extended/Pi'

class ExtendedKbd extends Component  {
  static propTypes = {

  }

  static childContextTypes = {
    currentSymbol: PropTypes.string,
    setFunc: PropTypes.func
  }

  getChildContext() {
    return {
      currentSymbol: this.props.currentSymbol,
      setFunc: this.props.setFunc
    }
  }

  render() {
    const style = {
      width: '50%',
      minWidth: '250px',
    }
    return (
      <div style = {style}>
        <Checkbox />
        <Func label = 'sin' funcType = 'sin'/>
        <Func label = 'cos' funcType = 'cos'/>
        <Func label = 'tan' funcType = 'tan'/>
        <Func label = 'ctg' funcType = 'tan'/>
        <Func label = {'\u221A'} funcType = 'sqrt'/>
        <Func label = '1/x' funcType = 'revDiv'/>
        <Func label = 'log' funcType = 'log'/>
        <Func label = 'ln' funcType = 'ln'/>
        <Func label = {'x\xB2'} funcType = 'sqr'/>
        <Func label = {'x\xB3'} funcType = 'cube'/>
        <Func label = {'x\u207F'} funcType = 'pow'/>
        <Func label = {'10\u207F'} funcType = 'tenPow'/>
        <Func label = 'n!' funcType = 'factorial'/>
        <Pi />
        <BracketOpen />
        <BracketClose />
      </div>
    )
  }
}


export default connect(store => {
  return {
    currentSymbol: store.actions.currentSymbol
  }
}, {setFunc})(ExtendedKbd)
