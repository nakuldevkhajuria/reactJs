import { Component } from "react"
import "./styles.css"
import withRouter from './HOC/withRouter';
import { Link } from "react-router-dom";

// const Context = createContext('');


 class Studentsupdate extends Component {


    constructor() {
        super();

        this.state = {
            fname: '',
            age: '',
            course: '',
            batch: '',
            showName: false
        }



    }




    addValue = () => {

        
        const updateArray = [...this.props.users];
        console.log(updateArray);
        
        const currentUser = { fname: this.state.fname, age: this.state.age, course: this.state.course, batch: this.state.batch }

        console.log(currentUser)
        updateArray[this.props.params.index] = currentUser
        console.log(currentUser)
        console.log(updateArray[this.props.params.index])
        this.props.updateUsers(updateArray)
        console.log(updateArray)
        this.setState({ showName: true })
    }

    render() {


        return (
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
            {this.state.showName &&
                    <p id="box2">
                        {this.state.arr.map(item => {
                            return (
                                <p id='box'>{`Name :${item.Name} | Age : ${item.Age} | Course :${item.Course} | Age :${item.Batch} `}</p>
                            )
                        })
                        }
                    </p>
                }
            </div>
            


               
           

        );
    }

};

 export default withRouter(Studentsupdate);


