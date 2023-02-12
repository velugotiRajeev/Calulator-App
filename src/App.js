import React, { Component } from 'react';
import './components/styles.css';
import ResultComponent from './components/Result';
import KeyPadComponent from './components/Keys';

class App extends Component {
  state = {
    result: ""
  }

  onClick = button => {
    if(button === "=") {
      this.calculate();
    }

    else if(button === "C") {
      this.reset();
    }

    else if(button === "CE") {
      this.backspace();
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };

  calculate = () => {
    var checkResult = ''
    if(this.state.result.includes('--')) {
      checkResult = this.state.result.replace('--', '+')
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        result: (eval(checkResult) || "") + ""
      })
    } catch(e) {
      this.setState({
        result: "error"
      })
    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
        result: this.state.result.slice(0, -1)
    })
  };

  render() {
    return (
      <div>
        <h1>calculator</h1>
        <div className="calculator-body">
          
          <ResultComponent result={this.state.result} />
          <br/>
          <KeyPadComponent onClick={this.onClick} />
        </div>
      </div>
    )
  }
}

export default App;