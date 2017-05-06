import React, { PropTypes } from 'react'
import Func from './buttons/extended/Func'
import Checkbox from './buttons/extended/Checkbox'
import BracketOpen from './buttons/extended/BracketOpen'
import BracketClose from './buttons/extended/BracketClose'

const ExtendedKbd = (props) => {
  const style = {
    width: '50%',
  }
  return (
    <div style = {style}>
      <Checkbox />
      <Func label = 'sin x' />
      <Func label = 'cos x' />
      <Func label = 'tan x' />
      <Func label = 'ctg x' />
      <Func label = {'\u221A'} />
      <Func label = '1/x' />
      <Func label = 'log' />
      <Func label = 'ln' />
      <Func label = {'x\xB2'} />
      <Func label = {'x\xB3'} />
      <Func label = {'x\u207F'} />
      <Func label = {'10\u207F'} />
      <Func label = 'n!' />
      <Func label = {'\u03C0'} />
      <BracketOpen />
      <BracketClose />
    </div>
  )
}

ExtendedKbd.propTypes = {

}

export default ExtendedKbd
