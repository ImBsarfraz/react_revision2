import React, { useMemo, useState } from "react";

// A computationally expensive calculation
const slowFunction = (num) => {
    console.log('Calling Slow Function');
    for(var i=0;i<1000000000;i++){} //simulate a time-consuming calculation 
    return num * 2;
}

export const UseMemo2 = () => {
    const [ count, setCount ] = useState(0);
    const [ inPutValue, setInputValue ] = useState(1);

    // expensive calculation with useMemo

    const doubledValue = useMemo(()=>{
        return slowFunction(inPutValue);
    },[inPutValue]); //only re-run if inputValue changes

    return(
        <>
        <h1>Memoised Component</h1>
       <p>Count: {count}</p>
       <button onClick={()=>setCount(count+1)}>INCREMENT</button>
      <p>Input Value: {inPutValue}</p>
      <input type="number" value={inPutValue} onChange={(e)=>setInputValue(Number(e.target.value))}/> <br/>

      <p>Result expensive calculation: {doubledValue}</p>

        </>
    )
}