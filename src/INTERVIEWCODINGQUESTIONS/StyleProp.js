import React from "react";

const Style = (props) => {
    return(
        <>
        <button style={{backgroundColor: props.color}}>{props.label}</button>
        </>
    )
}

export const StyleProp = () => {
    return(
        <Style color="red" label="CLICK ME!"></Style>
    )
} 