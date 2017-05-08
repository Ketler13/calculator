import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {
         setFunc, calculateFunc, changeSign, changeTrigonometricScale, setDigit,
         setBracket, getCours
       } from '../AC'
import Func from './buttons/extended/Func'
import Trigonometric from './buttons/extended/Trigonometric'
import Checkbox from './buttons/extended/Checkbox'
import Bracket from './buttons/extended/Bracket'
import BracketClose from './buttons/extended/BracketClose'
import Pi from './buttons/extended/Pi'
import PlusMinus from './buttons/extended/PlusMinus'
import Currency from './Currency'

class ExtendedKbd extends Component  {
  static propTypes = {

  }

  static childContextTypes = {
    currentSymbol: PropTypes.string,
    expression: PropTypes.array,
    setFunc: PropTypes.func,
    calculateFunc: PropTypes.func
  }

  getChildContext() {
    const {currentSymbol, expression, setFunc, calculateFunc} = this.props
    return {
      currentSymbol, expression, setFunc, calculateFunc
    }
  }

  componentDidMount() {
    this.props.getCours()
  }

  render() {
    const style = {
      width: '50%',
      minWidth: '250px',
    }
    const {
           changeSign, currentSymbol, trigonometricScale, setDigit,
           changeTrigonometricScale, setBracket, expression, cours
          } = this.props

    return (
      <div style = {style}>
        <Currency cours = {cours} expression = {expression} calc = {setDigit}/>
        <Checkbox changeScale = {changeTrigonometricScale}/>
        <Trigonometric label = 'sin' funcType = 'sin' scale = {trigonometricScale}/>
        <Trigonometric label = 'cos' funcType = 'cos' scale = {trigonometricScale}/>
        <Trigonometric label = 'tan' funcType = 'tan' scale = {trigonometricScale}/>
        <Trigonometric label = 'ctg' funcType = 'ctg' scale = {trigonometricScale}/>
        <Func label = {'\u221A'} funcType = 'sqrt'/>
        <Func label = '1/x' funcType = 'revDiv'/>
        <Func label = 'log' funcType = 'log'/>
        <Func label = 'ln' funcType = 'ln'/>
        <Func label = {'x\xB2'} funcType = 'sqr'/>
        <Func label = {'x\xB3'} funcType = 'cube'/>
        <Func label = {'10\u207F'} funcType = 'tenPow'/>
        <PlusMinus changeSign = {changeSign} currentSymbol = {currentSymbol}/>
        <Func label = 'n!' funcType = 'factorial'/>
        <Pi setPi = {setDigit}/>
        <Bracket label = '(' setBracket = {setBracket}/>
        <Bracket label = ')' setBracket = {setBracket}/>
      </div>
    )
  }
}


export default connect(store => {
  const {currentSymbol, expression, trigonometricScale} = store.actions
  return {
    currentSymbol, expression, trigonometricScale, cours: store.currency.cours
  }
},
{
  setFunc, calculateFunc, changeSign, changeTrigonometricScale, setDigit,
  setBracket, getCours
})(ExtendedKbd)
