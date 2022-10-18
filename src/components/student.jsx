import { Component } from "react"
import { Link } from "react-router-dom";
// import { Context } from './students-desc'
// import  Studentsdesc   from "./students-desc";
// import Page from "./page";
// const value = 'My name';

export default class Student extends Component{

  
    openPage = () => {
        // console.log('gee');
        // <Route path="/students-desc/"></Route>
    }
    
    render(){
    return(
        <div id="student">
            <div className="studentHeadline">
                <div>Students Details</div>
                <Link to={"/students-desc/"}>
                <button >Add new student</button>
                </Link>
                
            </div>
            {/* <Context.Provider value={value}></Context.Provider> */}
            <div className="boxe">
            <p className="boxes" >
            <ul id='box'>
                            <li>Name</li>
                            <li>Age</li>
                            <li>Department</li>
                            <li>Rating</li>
                            <li>Change</li>
                            </ul>
                {this.props.users.map((item,index) => {
                    return(
                        <div><hr />
                        <ul id='box'>
                            <li>{item.fname}</li>
                            <li>{item.age}</li>
                            <li>{item.course}</li>
                            <li>{item.batch}</li>
                           <li><Link to={`/students-update/${index}`}>Edit</Link></li>
                            </ul></div>
                      
                      

                       
                    )
                }
                    )}</p></div>
                        </div>
            
            

            
    )
    }
};


 