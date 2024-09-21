import React, { useReducer } from "react";

// step1: define reducer function
const reducer = (state, action) => {
    switch(action.type){
        case 'increment': 
            return {count: state.count + 1};
        case 'decrement': 
            return {count: state.count - 1};
        case 'reset': 
            return {count: 0}
        default:
            return state;
    }
};

export const UseReducer2 = () => {
    // step2: define the initialState
    const initialState = { count: 0 };

    // step3: use useReducer Hook
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <>
        <p>Count: {state.count}</p>

        {/* step4: dispatch action */}

        <button onClick={()=>dispatch({type: 'increment'})}>INCREMENT</button>
        <button onClick={()=>dispatch({type: 'decrement'})}>DECREMENT</button>
        <button onClick={()=>dispatch({type: 'reset'})}>RESET</button>
        </>
    )

}