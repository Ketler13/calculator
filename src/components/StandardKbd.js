import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { setDigit, setAction, setDot, deleteLastSymbol, deleteResult,
         equal
       } from '../AC'
import Backspace from './buttons/standard/Backspace'
import Digit from './buttons/standard/Digit'
import Action from './buttons/standard/Action'
import Dot from './buttons/standard/Dot'
import Equal from './buttons/standard/Equal'

const StandardKbd = ({currentSymbol, setDigit, setDot, setAction,
                      deleteLastSymbol, deleteResult, equal, result,
                      latestNumberContainsDot                            }) => {
  const style = {
    width: '50%',
  }

  return (
    <div style = {style}>
      <Backspace
        result = {result}
        deleteLastSymbol = {deleteLastSymbol}
        deleteResult = {deleteResult}
        deleteResult = {deleteResult}
      />
      <Digit label = '7' setDigit = {setDigit}/>
      <Digit label = '8' setDigit = {setDigit}/>
      <Digit label = '9' setDigit = {setDigit}/>
      <Action label = '/' currentSymbol = {currentSymbol} setAction = {setAction}/>
      <Digit label = '4' setDigit = {setDigit}/>
      <Digit label = '5' setDigit = {setDigit}/>
      <Digit label = '6' setDigit = {setDigit}/>
      <Action label = '*' currentSymbol = {currentSymbol} setAction = {setAction}/>
      <Digit label = '1' setDigit = {setDigit}/>
      <Digit label = '2' setDigit = {setDigit}/>
      <Digit label = '3' setDigit = {setDigit}/>
      <Action label = '-' currentSymbol = {currentSymbol} setAction = {setAction}/>
      <Dot
        currentSymbol = {currentSymbol}
        latestNumberContainsDot = {latestNumberContainsDot}
        setDot = {setDot}
      />
      <Digit label = '0' setDigit = {setDigit}/>
      <Equal equal = {equal}/>
      <Action label = '+' currentSymbol = {currentSymbol} setAction = {setAction}/>
    </div>
  )
}

StandardKbd.propTypes = {

}

export default connect(store => {
  const { currentSymbol, result, latestNumberContainsDot } = store.actions
  return {
    currentSymbol, result, latestNumberContainsDot
  }
}, {setDigit, setAction, setDot, deleteLastSymbol, deleteResult, equal})(StandardKbd)
