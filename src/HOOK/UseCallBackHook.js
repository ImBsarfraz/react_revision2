import React, { useCallback, useState } from 'react';

export const UseCallBackHook = () => {
    const [count, setCount] = useState(0);

    // const handleClick = () => {
    //     setCount(
    //         count+1
    //     );
    // };
    // useCallback will return the same function instance unless `count` changes
  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1); // using prevCount for accurate update
  }, []);

    console.log('Re Rendered');
    
    return(
        <>
        <p>Use Call Back Hook Is Used To Avoid Unnecessary Re Creation Of functions. 
            It is Used To Optimize The Performance Of React Application
        </p>
        <h1>Counter: {count}</h1>
        <button onClick={handleClick} className='btn btn-success'>ADD</button>
        </>
    )
}