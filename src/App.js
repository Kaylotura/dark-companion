import React, { Component } from 'react'
import JSONGems from './JSONGems'
import {ButtonToolbar, Button} from 'react-bootstrap'

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentGem: 'pancakes'
    }
    this.rollDie = this.rollDie.bind(this)
    this.rollDice = this.rollDice.bind(this)
    this.generateGem = this.generateGem.bind(this)
  }
  rollDie (die, modifier = 0) {
    const min = Math.ceil(1)
    const max = Math.floor(die)
    return (Math.floor(Math.random() * (max - min + 1)) + min) + modifier
  }
  rollDice (number, die, modifier = 0) {
    let runningTally = 0
    for (let i = 0; i < number; i++) {
      runningTally += this.rollDie(die)
    }
    return runningTally + modifier
  }
  generateGem () {
    let gemClass
    let gemName
    let gemValue
    // Step 1: figure out just how good of a gem it is.
    let valueDie = this.rollDie(100)
    if (valueDie < 26) {
      gemClass = 0
      gemValue = this.rollDice(4, 4)
    } else if (valueDie < 51) {
      gemClass = 1
      gemValue = (this.rollDice(2, 4) * 10)
    } else if (valueDie < 71) {
      gemClass = 2
      gemValue = (this.rollDice(4, 4) * 10)
    } else if (valueDie < 91) {
      gemClass = 3
      gemValue = (this.rollDice(2, 4) * 100)
    } else if (valueDie < 100) {
      gemClass = 4
      gemValue = (this.rollDice(4, 4) * 100)
    } else if (valueDie === 100) {
      gemClass = 5
      gemValue = (this.rollDice(2, 4) * 1000)
    }
    // Step 2: Determine gem-place die, then roll it to determine gem type
    let gemPlaceDie = JSONGems[gemClass].length
    let gemPlace = (this.rollDie(gemPlaceDie) - 1)
    if (Array.isArray(JSONGems[gemClass][gemPlace])) {
      let gemVariableDie = JSONGems[gemClass][gemPlace].length
      let gemVariable = (this.rollDie(gemVariableDie) - 1)
      gemName = JSONGems[gemClass][gemPlace][gemVariable]
    } else {
      gemName = JSONGems[gemClass][gemPlace]
    }
    // Step 3: Put it all together?
    this.setState({currentGem: `A ${gemName} worth ${gemValue} gp`})
  }
  render () {
    return (
      <div>
        <p>Generate a random Gem!</p>
        <Button
          bsStyle='primary'
          onClick={(event) => this.generateGem()}
        >
          'Gem Me Baby'
        </Button>
        <p>{this.state.currentGem}</p>
      </div>
    )
  }
}

export default App
