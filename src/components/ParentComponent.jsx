import React, { Component } from 'react'
import NormalComponent from './NormalComponent'
import PureComponents from './PureComponents';

export default class ParentComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      color: 'red'
    }
  }
//   textChange = () =>{
        
//     this.setState({color:'red'})
//     console.log('this is pure component rendering')
// }
  render() {
    return (
      <div>
        <NormalComponent color={this.state.color} value={"Normal Component"} />
      <PureComponents color={this.state.color} value={"Pure Component"} />
      </div>
    )
  }
}
