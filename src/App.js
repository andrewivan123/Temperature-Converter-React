import React from 'react';
import './App.css';
import Input from './Component/Input.js'
import {Convert} from './Component/Tempconverter.js'

class App extends React.Component {
  state = {
    unit: '',
    celcius: '',
    fahrenheit: '',
    kelvin: '',
    error: false
  }


  tempChange = (cell) => {

    if (cell.target.value === '') {
      //console.log('masukin angka');
      this.setState(
        {
          celcius: '',
          fahrenheit: '',
          kelvin: '',
          error: false
        }
      )
    }

    if (cell.target.value === '-') {//handles negative number
      this.setState({
        celcius: '-',
        fahrenheit: '-',
        kelvin: '-',
        error: false
      })
    }

    const val = parseInt(cell.target.value)

    if (Number.isNaN(val)) {
      //console.log('Not a number')
      this.setState({ error: true })
      return 
    }

    if (cell.target.name === 'celcius') {
      const answer =  Convert(val,'celcius')
      this.setState(
        {
          unit: 'celcius',
          celcius: answer.celcius,
          fahrenheit: answer.fahrenheit,
          kelvin: answer.kelvin,
          error: false
        }
      )
    }


    else if (cell.target.name === 'fahrenheit') {
      const answer = Convert(val,'fahrenheit')
      this.setState(
        {
          unit: 'fahrenheit',
          celcius: answer.celcius,
          fahrenheit: answer.fahrenheit,
          kelvin: answer.kelvin,
          error: false
        }
      )
    }

    else if (cell.target.name === 'kelvin') {
      const answer = Convert(val,'kelvin')
      this.setState(
        {
          unit: 'kelvin',
          celcius: answer.celcius,
          fahrenheit: answer.fahrenheit,
          kelvin: answer.kelvin,
          error: false
        }
      )
    }


  }

  render() {
    return (
      <div className="App container">
        <h1>Online Temperature Converter</h1>
        <h3>Input unit: {this.state.unit}</h3>

        {
          this.state.error && (<div><p className="HandleError">Numbers Please!</p></div>)
        }

        <Input
          id='celcius'
          name='celcius'
          value={this.state.celcius}
          unit={this.state.unit}
          onChange={this.tempChange} />


        <Input
          id='fahrenheit'
          name='fahrenheit'
          value={this.state.fahrenheit}
          unit={this.state.unit}
          onChange={this.tempChange} />

        <Input
          id='kelvin'
          name='kelvin'
          value={this.state.kelvin}
          unit={this.state.unit}
          onChange={this.tempChange}>
        </Input>

      </div>
    );
  }


}

export default App;
