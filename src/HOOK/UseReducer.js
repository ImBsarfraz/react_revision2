import React, { useReducer } from 'react';

// Step 1: Define the initial state
const initialState = { count: 0 };

// Step 2: Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error();
  }
}

const UseReducer = () => {
  // Step 3: Use useReducer to manage state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      {/* Step 4: Dispatch actions on button clicks */}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

export default UseReducer;

// The useReducer hook in React is an alternative to useState for managing complex 
// state logic, especially when the state involves multiple sub-values or the next state 
// depends on the previous one. It’s similar to how redux works but on a smaller scale.

// Structure of useReducer
// useReducer takes two arguments:

// A reducer function: This function receives the current state and an action and 
// returns the new state.
// An initial state: The starting state value.
// It returns two things:

// The current state.
// A dispatch function that is used to trigger the reducer and update the state.

// Reducer Function:
// A reducer is a function that determines how the state should change based on 
// the dispatched action.
// How It Works:
// Initial State:

// We define initialState as { count: 0 }.
// The useReducer hook takes this initial state and the reducer function.
// Reducer Function:

// The reducer function takes two arguments: the current state and an action.
// Based on the action type (increment, decrement, reset), the function updates the count 
// in the state and returns the new state.
// Switch Case in Reducer:

// increment: Adds 1 to the current count.
// decrement: Subtracts 1 from the current count.
// reset: Resets the count to 0.
// Dispatching Actions:

// In the JSX, buttons are used to trigger (dispatch) actions with a specific 
// type (increment, decrement, reset).
// For example, when the "Increment" button is clicked, it dispatches { type: 'increment' } to the reducer. The reducer increases the count by 1.
// Rendering State:

// The current state.count is displayed inside a <p> tag.