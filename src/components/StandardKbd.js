import React, { Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setDigit, setAction, setDot, deleteLastSymbol, deleteResult,
         equal
       } from '../AC'
import Backspace from './buttons/standard/Backspace'
import Digit from './buttons/standard/Digit'
import Action from './buttons/standard/Action'
import Dot from './buttons/standard/Dot'
import Equal from './buttons/standard/Equal'

class StandardKbd  extends Component {
  static propTypes = {

  }

  static childContextTypes = {
    keyPressed: PropTypes.string
  }

  getChildContext() {
    return {
      keyPressed: this.props.keyPressed
    }
  }

  render() {
    const style = {
      width: '50%',
      minWidth: '250px',
    }

    const {
            currentSymbol, setDigit, setDot, setAction, deleteLastSymbol,
            deleteResult, equal, result, latestNumberContainsDot , expression
          } = this.props

    return (
      <div style = {style}>
        <Backspace
          result = {result}
          expression = {expression}
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
}

export default connect(store => {
  const { currentSymbol, result, latestNumberContainsDot, expression, keyPressed } = store.actions
  return {
    currentSymbol, result, latestNumberContainsDot, expression, keyPressed
  }
}, {setDigit, setAction, setDot, deleteLastSymbol, deleteResult, equal})(StandardKbd)
