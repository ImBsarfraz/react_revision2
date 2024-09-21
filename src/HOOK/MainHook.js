import React from "react";
import { UseStateHook } from "./UseStateHook";
import { UseEffectHook } from "./UseEffectHook";
import { UseCallBackHook } from "./UseCallBackHook";
import UseReducer from "./UseReducer";
import { UseReducer2 } from "./UseReducer2";

export const MainHook = () => {
    return(
        <>
        {/* <UseStateHook/> */}
        {/* <UseEffectHook/> */}
        {/* <UseCallBackHook/> */}
        {/* <UseReducer/> */}
        <UseReducer2/>
        </>
    )
}