import React, { useState } from "react";

export const UseStateHook = () => {
    const [ message, setMessage ] = useState("Use State Hook Example");
    const [ count, setCount ] = useState(0);

    function ChangeState(){
        setMessage(
            "Sarfraz Bagwan You Hooked With useState Hook!"
        );
        setCount(
            count+1
        );
    }
    
    return(
        <>
        <h1>Message: {message}</h1>
        <h4>Count: {count}</h4>
        <button onClick={ChangeState}>CHNAGE STATE</button>
        </>
    )
}