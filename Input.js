import React from 'react'

class Input extends React.Component{
    
    render(){
        return(
            <div className = "InputBox">
            <label  
            {...this.props.unit === this.props.name && {style:{fontWeight:'bold'}}}>
            From {this.props.unit} to {this.props.name}
            </label>
        <input 
            className="form-control"
            id={this.props.name}
            name={this.props.name}
            value={this.props.value}
            onChange= {this.props.onChange}
            placeholder={`Enter a ${this.props.name} value`}
            />
        </div>
        )
        
}

}

export default Input;
