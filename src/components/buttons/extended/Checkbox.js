import React, { PropTypes } from 'react'
import Button from '../Button'
import Paper from 'material-ui/Paper'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'

const Checkbox = ({label, result, deleteLastSymbol, deleteResult}) => {
  const onClick = ev => {
    if (result || result !== null) {
      deleteResult()
    } else {
      deleteLastSymbol()
    }
  }
  const style = {
    container: {
      width: '100%',
      height: '36px',
      boxShadow: 'inset 0px 1px 6px rgba(0, 0, 0, 0.12), inset 0px 1px 6px rgba(0, 0, 0, 0.12)',
    },
    radioButtonGroup: {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: '100%',
    },
    radioButton: {
      display: 'inline-block',
    },
  }
  return (
    <Paper style = {style.container} zDepth={1}>
      <RadioButtonGroup style = {style.radioButtonGroup} name="scale" defaultSelected="deg">
        <RadioButton
          style = {style.radioButton}
          value="deg"
          label="Градусы"
        />
        <RadioButton
          style = {style.radioButton}
          value="rad"
          label="Радианы"
        />
      </RadioButtonGroup>
    </Paper>
  )
}

Checkbox.propTypes = {

}

export default Checkbox
