import { Component } from "react"
import "./styles.css"
import { Link } from "react-router-dom";

// const Context = createContext('');


export default class Studentsdesc extends Component{
    constructor(props){
        super(props);
     
        this.state = {
            fname : '',
            age : '',
            course : '',
            batch : '',
            showName: false
        }
    }
    
    addValue = () => {
        // if(this.displayData.length===0){

        // }
       let Updated = this.props.users;
       Updated.push({fname:this.state.fname ,age: this.state.age,course: this.state.course, batch:  this.state.batch}

               
        );
        console.log(Updated);
       
        // this.setState({
            
        //     fname: "",
        //     age: "",
        //     course: "",
        //     batch: ""
        //   });
        
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
           
            </div> 
            </div>
    )
    }
};


 