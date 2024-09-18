import React, { useEffect, useState } from "react";

export const UseEffectHook = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    function addCount1(){
        setCount1(
            count1+1
        );
    }

    function addCount2(){
        setCount2(
            count2+2
        );
    }

    useEffect(()=>{
        alert("Count 1: Why Clicked Me "+ count1 + " Times");
    }, [count1]);

    useEffect(()=> {
        alert("Count 2: " + count2);
    }, [count2]);

    return(
        <>
        <h1>Count 1: {count1}</h1>
        <button onClick={addCount1}>ADD1</button>
        <h2>Count 2: {count2}</h2>
        <button onClick={addCount2}>ADD2</button>
        </>
    )
}