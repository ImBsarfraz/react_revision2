import React from "react";

export const FunctionEvent = () => {
    function AddStyle(){
        document.getElementById("name").style="color: red";
        document.getElementById("education").style="color: blue";
        document.getElementById("position").style="color: green";
    }
    
    return(
        <>
        <ul>
            <li id="name">Name: Sarfraz Bagwan</li>
            <li id="education">Education: MSc Computer Application</li>
            <li id="position">Position: MERN Stack Developer</li>
        </ul>

        <button onClick={AddStyle} className="btn btn-success">Add Style</button>
        </>
    )
}