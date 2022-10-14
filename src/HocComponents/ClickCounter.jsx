import React, { Component } from 'react'

export default class ClickCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrementCount = () => {
        let count = this.state.count;
        this.setState({count:count+1})
    }
    decrementCount = () => {
        let count = this.state.count;
        this.setState({count:count-1})
    }
  render() {
   
    return (
        <div>
            <h1>Higher Order Function Example</h1>
            <h3>{this.state.count}</h3>
      <button onClick={this.incrementCount}>Click {this.state.count} Times</button>
      <button onClick={this.decrementCount}>Click {this.state.count} Times</button>
      </div>
    )
  }
}
