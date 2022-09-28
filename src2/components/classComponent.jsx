import { Component } from "react";
import "./classComponentCss.css"


export default class ClassComponent extends Component{

    constructor(props){
        super(props);
        this.displayData = [];
        this.state={
            fname : '',
            dep : '',
            rating : '',
            showName : this.displayData
        }
    }
     updateName = (event)=> {
                // console.log('Kw101', event);

        this.setState({fname: event.target.value})
        
    }
    updateDep = (event) => {
        this.setState({dep : event.target.value})
    }
    updateRating = (event) => {
        this.setState({rating : event.target.value})
    }
    UpdateArray = () => {
      const element = document.getElementById("savedData");
      element.style.visibility= 'visible';
      this.displayData.push(
        <div className="appendData">
          Name: {this.state.fname} | Department: {this.state.dep} | Rating:{" "}
          {this.state.rating}
        </div>
      );
  
      this.setState({
        showName: this.displayData,
        fname: "",
        dep: "",
        rating: "",
      });
      
        // this.setState({showName: true})
    }
    render(){
        // const {fname,dep} = this.props;
        return(
            <div >
                <p className="inputs">
          Name :
        <input type="text" id="name" value={this.state.fname} onChange={this.updateName} /><br />
        Department :<input type="text" id="dep"  value={this.state.dep} onChange={this.updateDep} /><br />
        Rating : <input type="text"  id ="rating" value={this.state.rating} onChange={this.updateRating} />
        <p><button type="submit" className="but" onClick={this.UpdateArray}>Submit</button></p>

        {/* {this.state.showName ?
        <p className="box"> {`Name : ${this.state.arrList} : ${this.state.fname} | Department : ${this.state.dep} | Rating : ${this.state.rating} `} </p>
         : null} */}
        <div id="savedData">{this.displayData}</div>



   


        </p>
       
       
        
        </div>
        )
        
        }
}