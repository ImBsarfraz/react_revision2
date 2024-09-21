import React from "react";

export class Lifecycle extends React.Component{
    // constructor(): Called before the component is mounted. 
    // Used for initializing state and binding methods.
    constructor(props){
        super(props);
        this.state = { count: 1, message: props.message };
    }

    componentDidMount(){
        console.log('Component Mounted');
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.count !== this.state.count;
    }

    componentDidUpdate(prevProps, prevState){
        console.log('Component Updated');
    }
    
    componentWillUnmount() {
        console.log(`Component Will Unmount`);
    }
    
    render(){
        return(
            <>
            <h1>{this.state.message}</h1>
            <p>Count: {this.state.count}</p>
            <button onClick={()=> this.setState({count: this.state.count + 1})}>INCREAMENT</button>
            </>
        )
    }

}

// Lifecycle Methods in Class Components:
// Mounting (When the component is being added to the DOM):

// constructor(): Called before the component is mounted. 
// Used for initializing state and binding methods.
// static getDerivedStateFromProps(props, state): Called before rendering, 
// both on the initial mount and when the component updates. 
// It allows you to update state based on props.
// render(): The only required method in a class component. 
// It returns the JSX that represents the component's UI.
// componentDidMount(): Called after the component is rendered and 
// inserted into the DOM. It's a good place for side effects like data fetching 
// or setting up subscriptions.

// Updating (When props or state change):

// static getDerivedStateFromProps(props, state): Similar to mounting, 
// this method is called whenever props or state are updated.
// shouldComponentUpdate(nextProps, nextState): Called before rendering when 
// new props or state are received. It allows you to optimize performance by 
// preventing unnecessary renders.
// render(): Re-renders the component.
// getSnapshotBeforeUpdate(prevProps, prevState): Called just before the DOM is updated.
//  It captures some information from the DOM (e.g., scroll position) before 
// changes are made.
// componentDidUpdate(prevProps, prevState, snapshot): Called after the component has
//  updated. It's a good place to perform post-update operations such as updating the 
// DOM or fetching new data.
// Unmounting (When the component is removed from the DOM):

// componentWillUnmount(): Called just before the component is destroyed and 
// removed from the DOM. It's a good place to clean up 
// (e.g., remove event listeners, cancel network requests, or clear timers).
// Error Handling:

// componentDidCatch(error, info): Called if an error is thrown during rendering, 
// lifecycle methods, or in constructors of any child components. 
// Used to handle errors gracefully.