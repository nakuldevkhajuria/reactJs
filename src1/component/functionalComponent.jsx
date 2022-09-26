import React from "react";
import  "./cssFile.css";



const FunctionalComponent = () =>{

 
        function openFune() {
         let element = document.getElementById("functionLines");
        if(element.style.visibility === "hidden") {
            element.style.visibility = "visible";
            return;
        }

        element.style.visibility = "hidden";
        return;
       }
    return(
        <div className="both">
            <button onClick={openFune} >To see styling in functional component</button>
            <div className="functionLines" id="functionLines">
                <p style={{fontSize:"37px"}}>
                    This is created using functional Component
                    </p>
                    <p>This is done using external CSS</p>
                    <p style={{color:"blue"}}>This is done using inline CSS</p>
            </div></div>

    )
}
export default FunctionalComponent;