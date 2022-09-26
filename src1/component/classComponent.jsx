import { Component } from "react";
import "./cssFile.css";
// import classComonentJs.js

class ClassComponent extends Component{
    
    openFun = () =>  {
        let element = document.getElementById("classLines");
        if(element.style.visibility === "hidden") {
            element.style.visibility = "visible";
            return;
        }

        element.style.visibility = "hidden";
        return;
       }
      
    render(){
       
        return(
            <div className="both">
                <button onClick={this.openFun}>To see styling in class component</button>
            <div className="classLines" id="classLines">
                <p style={{fontSize:"37px"}}>
                    This is created using Class Component
                    </p>
                    <p>This  done using external CSS</p>
                    <p style={{color:"blue"}}>This is done using inline CSS</p>
                    
                   
            </div></div>
        )
    }
}
export default ClassComponent;