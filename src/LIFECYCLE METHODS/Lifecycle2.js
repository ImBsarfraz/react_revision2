import React from "react";

export class Lifecycle2 extends React.Component{
    constructor(props){
        super(props);
        this.state = { count: 0, message: props.message}
    }

    componentDidMount(){
        console.log('Component Is Mounted!');
    }
    shouldComponentUpdate(nextState, nextProps){
        return nextState.count !== this.state.count;
    }
    componentDidUpdate(prevState, prevProps){
        console.log('Component Is Updated');
    }
    componentWillUnmount(){
        console.log('Component Is Unmounted');
    }

    render(){
        return(
            <>
            <h4>Greeting: {this.state.message}</h4>
            <h6>Count: {this.state.count}</h6>
            <button onClick={()=>this.setState({count: this.state.count + 1})}>INCREMENT</button>
            </>
        )
    }
}