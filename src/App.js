import React, { Component } from 'react';
import './App.css';
import Body from './components/Body';

class App extends Component {
  constructor(){
    super();
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: "",
      birthday: '',
      gender: '',
      color: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleNext(e){
    e.preventDefault()
    this.props.history.push("/page/2")
    console.log(this.props.history)
  }

  handleInputChange(e){
    e.preventDefault()  
    const key = e.target.id 
    const value = e.target.value
    this.setState({
      [key]: value
    })
  }
  render() {
    return (
      <div className="App">
        <Body birthday={this.state.birthday} gender={this.state.gender} color={this.state.color}/>

        <div className="output">
              <h1>Output</h1>
              Birthday: {this.state.birthday}
              <div className="color-output" style={{"background":`${this.state.color}`}}></div>
        </div>
      </div>
    );
  }
}

export default App;
