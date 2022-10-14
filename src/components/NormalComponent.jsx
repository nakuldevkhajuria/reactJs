import React, { Component } from 'react'
import './Styles.css'

export default class NormalComponent extends Component {
    
    textChange = () =>{
        
        this.setState({color:'green'})
       
    }
  render() {
    console.log('this is normal component rendering')
    return (
      
      <div className='back' style={{color:this.props.color}}>
        Normal and Pure Component
      <h3>we can check the console for output</h3>
       {this.props.value}
       {/* {this.props.color} */}
       <br />
      
       <button onClick={this.textChange}>Make it red</button>
       
        </div>
    )
    
  }
}
