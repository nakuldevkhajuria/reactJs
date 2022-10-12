import { Component } from "react"
import "./styles.css"
import { Link } from "react-router-dom";

export default class Studentsdesc extends Component{
    constructor(props){
        super(props);
        this.displayData = [];
        this.state = {
            fname : '',
            age : '',
            course : '',
            batch : '',
            showName : this.displayData
        }
    }
    addValue = () => {
        // if(this.displayData.length===0){

        // }
       
        this.displayData.push(
            <div className="appendData">
               <li>{this.state.fname}</li> 
               <li>{this.state.age} </li> 
               <li></li>{this.state.course}  <li>{this.state.batch}</li>
               <li><Link to="/student-desc" >Link</Link></li>
               <hr />
            </div>
        );
        this.setState({
            showName: this.displayData,
            fname: "",
            age: "",
            course: "",
            batch: ""
          });
        
// this.setState({

// })
    }

   
   
    render(){
        
    return(
        <div>
        <div id="studentDesc">
            <div>
           <input  type="text" placeholder="Name" value={this.state.fname} 

           onChange={(e) => { this.setState({fname:e.target.value})}}/>
          
           <input type="text" placeholder="Age" 
           value={this.state.age} 
           onChange={(e) => { this.setState({age:e.target.value})}}
           />
           </div>
           <div>
           <input type="text" placeholder="Course"
           value={this.state.course} 
           onChange={(e) => { this.setState({course:e.target.value})}}
           />
           <input type="text"  placeholder="Batch"
           value={this.state.batch} 
           onChange={(e) => { this.setState({batch:e.target.value})}}
           />
           </div>
            <div id="buttons">
            <Link to="/student"> <button>Cancel</button></Link>
               <Link to="/student"> <button onClick={this.addValue}>Submit</button></Link>
              
            </div>
           

            </div> <div id="savedData">{this.displayData}
        </div>
            </div>
    )
    }
};


 