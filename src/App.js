import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import 'st-test-components'; 

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      msg: "Default msg",
      inputvalue: "Default input value"
    }
    this.changeHeader = this.changeHeader.bind(this);
    this.changeInputValue = this.changeInputValue.bind(this);
  }

  componentDidMount() {
    this.refs['myinput'].addEventListener('change', ev =>
      this.changeHandler(ev)
    );
  }

  changeHeader() {
    console.log('changing state');
    this.setState({
      msg: "By Belenos"
    })
  }

  changeInputValue() {
    this.setState({
      inputvalue: "New input value"
    })
  }

  changeHandler(event) {
    console.log(`handled event from ce: new value: ${event.target.value}`);
  }

  render() {
    return ( 
      <div className="App">
        <header className="App-header">
          <img src={logo} className = "App-logo" alt="logo"/>
          <h1 className="App-title"> Welcome to React</h1>
        </header>
        <p className="App-intro">To get started, edit <code>src / App.js</code> and save to reload.
        </p >
        <h1>Stencil ce interop test</h1>
        <ul style={{"textAlign": "left"}}>
          <li>
            <input type="checkbox" name="interop-test" value="cdn" checked></input>
            <b>CDN</b>: Imported adding script tag at index.html pointing to stheader.js 
          </li>
          <li>
            <input type="checkbox" name="interop-test" value="module"></input>
            <b>Module</b>: Using  @stencil/webpack  
          </li>
        </ul>
        <button onClick={this.changeHeader}>Change header</button>
        <st-header title={this.state.msg} last="JS"></st-header>
        <button onClick={this.changeInputValue}>Change input</button>
        <st-input value={this.state.inputvalue} onChange={this.changeHandler} ref="myinput"></st-input>
      </div>
    );
  }
}

export default App;