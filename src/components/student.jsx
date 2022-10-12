import { Component } from "react"
import { Link } from "react-router-dom";
// import  Studentsdesc   from "./students-desc";
// import Page from "./page";


export default class Student extends Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }
    openPage = () => {
        console.log('gee');
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
            <div id="lists">
            <div id="student-table">
                
                            <div className="fix-1">Name </div>
                            <div className="fix-1">Age</div>
                            <div className="fix-1">Course</div>
                            <div className="fix-1">Batch</div>
                            <div className="fix-1"><Link to="/student-desc" >Link</Link></div>
                            
                            {/* {this.showName(this.props.displayData.length)} */}
                        </div>
                        <div id="student-table">
                
                            <div className="fix-1">Ram </div>
                            <div className="fix-1">23</div>
                            <div className="fix-1">Full stack</div>
                            <div className="fix-1">07</div>
                            <div className="fix-1"><li><Link to="/student-desc" >Link</Link></li></div>
                            
                            {/* {this.showName(this.props.displayData.length)} */}
                        </div>
                        <div id="student-table">
                
                            <div className="fix-1">Sham </div>
                            <div className="fix-1">22</div>
                            <div className="fix-1">Frontend</div>
                            <div className="fix-1">08</div>
                            <div className="fix-1"><li><Link to="/student-desc" >Link</Link></li></div>
                            
                            {/* {this.showName(this.props.displayData.length)} */}
                        </div>

                        <div id="student-table">
                
                            <div className="fix-1">shivam </div>
                            <div className="fix-1">24</div>
                            <div className="fix-1">Backend</div>
                            <div className="fix-1">09</div>
                            <div className="fix-1"><li><Link to="/student-desc" >Link</Link></li></div>
                            
                            {/* {this.showName(this.props.displayData.length)} */}
                        </div>

                        <div id="student-table">
                
                            <div className="fix-1">Hritik </div>
                            <div className="fix-1">28</div>
                            <div className="fix-1">Devops</div>
                            <div className="fix-1">14</div>
                            <div className="fix-1"><li><Link to="/student-desc" >Link</Link></li></div>
                            
                            {/* {this.showName(this.props.displayData.length)} */}
                        </div>
                        </div>
                        </div>
            
            

            
    )
    }
};


 