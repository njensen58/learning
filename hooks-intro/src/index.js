import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import DiceBox from './DiceBox'

ReactDOM.render(<DiceBox maxRoll={3} direction={"row"}/>, document.getElementById('root'))