import React, { PureComponent } from 'react'

import './Styles.css'

export default class PureComponents extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
            color : 'green'
        }
    }
    textChange = () =>{
        
        this.setState({color:'yellow'})
       
    }
  render() {
    console.log('this is pure component rendering')
    return (
      <div className='back' style={{color:this.props.color}}>
       {this.props.value}<br />
       {/* Name: <input type="text" value={this.state.text} onChange={this.textChange} /> */}
       <button onClick={this.textChange}>Make it red</button>
        </div>
    )
  }
}
