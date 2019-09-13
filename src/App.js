import React from 'react';
import './App.css';
import Input from './Component/Input.js'

class App extends React.Component{
  state = {
    unit: '',
    celcius: '',
    fahrenheit: '',
    kelvin: '',
    error: false
  }


tempChange = (isi) => {

  if(isi.target.value === ''){ //check whether input value is empty
    console.log('masukin angka');
    this.setState(
      {
        celcius:'',
        fahrenheit:'',
        kelvin:'',
        error:false
      }
    )
    return ''
  }

  if(isi.target.value === '-'){
    this.setState({
      celcius:'-',
      fahrenheit:'-',
      kelvin:'-',
      error:false
    })
  }

  let val = parseInt(isi.target.value)

  if(Number.isNaN(val)){
    console.log('Not a number')
    this.setState({error:true})
    return ''
  }

  if (isi.target.name ==='celcius'){
    this.setState(
      {
        unit:'celcius',
        celcius: val,
        fahrenheit: (9/5*val+32).toFixed(3),
        kelvin:(val+273).toFixed(3),
        error:false
      }
    )
  }
  

  else if (isi.target.name ==='fahrenheit'){
    this.setState(
      {
        unit:'fahrenheit',
        celcius: ((val-32)*5/9).toFixed(3),
        fahrenheit: val,
        kelvin: ((val-32)*5/9 + 273).toFixed(3),
        error:false
      }
    )
  }

  else if (isi.target.name ==='kelvin'){
    this.setState(
      {
        unit:'kelvin',
        celcius: (val-273).toFixed(3),
        fahrenheit: (9/5*(val-273 )+32).toFixed(3),
        kelvin:val,
        error:false
      }
    )
  }


}

render(){
  return (
    <div className = "App container">
      <h1>Online Temperature Converter</h1>
      <h3>Input unit: {this.state.unit}</h3>

      {
        this.state.error ? <p className="HandleError">Numbers Please!</p> : null
      }

      <Input
        id='celcius'
        name='celcius'
        value={this.state.celcius}
        unit = {this.state.unit}
        onChange={this.tempChange}/>
        

      <Input
        id='fahrenheit'
        name='fahrenheit'
        value={this.state.fahrenheit}
        unit = {this.state.unit}
        onChange={this.tempChange}/>

      <Input
        id='kelvin'
        name='kelvin'
        value={this.state.kelvin}
        unit = {this.state.unit}
        onChange={this.tempChange}>
        </Input>

    </div>
  );
    }

  
}

export default App;
