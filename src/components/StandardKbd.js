import React, { PropTypes } from 'react'
import Backspace from './buttons/standard/Backspace'
import Digit from './buttons/standard/Digit'
import Action from './buttons/standard/Action'
import Dot from './buttons/standard/Dot'
import Equal from './buttons/standard/Equal'

const StandardKbd = (props) => {
  const style = {
    width: '50%',
  }
  return (
    <div style = {style}>
      <Backspace/>
      <Digit label = '7'/>
      <Digit label = '8'/>
      <Digit label = '9'/>
      <Action label = '/'/>
      <Digit label = '4'/>
      <Digit label = '5'/>
      <Digit label = '6'/>
      <Action label = '*'/>
      <Digit label = '1'/>
      <Digit label = '2'/>
      <Digit label = '3'/>
      <Action label = '-'/>
      <Dot />
      <Digit label = '0'/>
      <Equal/>
      <Action label = '+'/>
    </div>
  )
}

StandardKbd.propTypes = {

}

export default StandardKbd
