import React from "react";

import styled from "styled-components";

const Button = styled.button`
   background-color: red;
   color: white;
   text-align-center;
   height: 40px;
   width: 100px;
   &:hover {
    background-color: ${(props) => (props.primary ? "#0056b3" : "#5a6268")};
  }
`

export const StyledCom2 = () => {
    return(
        <>
        <Button>CLICK HERE</Button>
        </>
    )
}