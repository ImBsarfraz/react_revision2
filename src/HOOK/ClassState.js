import React from "react";

export class ClassState extends React.Component{
    constructor(){
        super();
        this.state = {
            message: "State Example Using Class Component",
            count: 0
        };
    }

    handleChange(){
        this.setState({
            message: "Welcome To Class Sate Sarfraz",
            count: this.state.count+1
        });
    }
    render(){
        return(
            <>
            <h1>Class State: {this.state.message}</h1>
            <h1>Count: {this.state.count}</h1>
            <button onClick={()=>this.handleChange()}>Change State</button>            
            </>
        )
    }
}