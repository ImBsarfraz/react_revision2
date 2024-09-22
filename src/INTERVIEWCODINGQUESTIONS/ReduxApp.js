import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch} from "react-redux";

const initialState = {
    count: 0,
};

function reducer(state = initialState, action){
    switch(action.type){
        case 'INCREMENT':
            return{
                ...state,
                count: state.count + 1,
            };
        case 'DECREMENT':
            return{
                ...state,
                count: state.count - 1,
            };
        default:
            return state;    
    }
}

// Store
const store = createStore(reducer);

// Counter Component
function Counter(){
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({type: 'INCREMENT'});
    }
    const decrement = () => {
        dispatch({type: 'DECREMENT'});
    }

    return(
        <>
        <h1>Managing State Using Redux</h1>
        <h5>Count: {count}</h5>
        <button onClick={increment}>INCREMENT</button>
        <button onClick={decrement}>DECREMENT</button>
        </>
    )
}

function ReduxApp(){
    return(
        <Provider store={store}>
            <Counter/>
        </Provider>
    )
}

export default ReduxApp;