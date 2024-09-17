import React from "react";
import { Child } from "./Child";
import { Data } from "../MapMethod/MapData";

export const Parent = () => {
    return(
        <>
        <Child
        image1={Data[0].avtar} 
        name1={Data[0].name} 
        education1={Data[0].education} 
        address1={Data[0].address}
        image2={Data[1].avtar} 
        name2={Data[1].name}
        education2={Data[1].education}
        address2={Data[1].address}
        image3={Data[2].avtar} 
        name3={Data[2].name}
        education3={Data[2].education}
        address3={Data[2].address}
        image4={Data[3].avtar} 
        name4={Data[3].name}
        education4={Data[3].education}
        address4={Data[3].address}
        />
        </>
    )
}