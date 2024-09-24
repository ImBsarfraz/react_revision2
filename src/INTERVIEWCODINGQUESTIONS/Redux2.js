import React from "react";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

const initialState = {
    count: 0,
};

function reducer(state = initialState, action){
    switch(action.type){
        case 'INCREMENT':
            return{
                ...state,
                count: state.count + 1,
            }
        default: 
            return state
    };
};

const store = createStore(reducer);

function Counter(){
    const count = useSelector(state=> state.count);
    const dispatch = useDispatch();

    function increment(){
        dispatch({type: 'INCREMENT'});
    }

    return(
        <>
        <h1>Manage Satate</h1>
        <h5>{count}</h5>
        <button onClick={increment}>INCREMENT</button>
        </>
    )
}

export default function Redux2(){
    return(
        <>
        <Provider store={store}>
            <Counter/>
        </Provider>
        </>
    )
}