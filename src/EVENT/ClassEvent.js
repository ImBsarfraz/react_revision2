import React from "react";

export class ClassEvent extends React.Component{
    styleIt(){
        document.getElementById('name').style="background-color: red";
        document.getElementById('role').style="background-color: blue";
        document.getElementById('exp').style="background-color: green";
    };

    AlertIt(){
        alert("WALASAUFA YU'TIKA RABBUKA FATARDA");
    }
    render(){
        return(
            <>
            <button onClick={this.AlertIt.bind()}>ALERT</button>
            <ul>
                <li id="name">Name: Sarfraz Bagwan</li>
                <li id="role">Role: MERN Stack Developer</li>
                <li id="exp">Experience: 1 Year</li>
            </ul>

            <button onClick={()=>this.styleIt()}>STYLE</button>
            </>
        )
    }
}