import React from "react";
import { FunctionComponents } from "./components/FunctionComponent";
import { ClassComponent } from "./components/ClassComponent";
import { Parent } from "./components/PropsExample/Parent";
import { MapComponent } from "./components/MapMethod/MapComponent";
import { MainHook } from "./HOOK/MainHook";
import { ClassState } from "./HOOK/ClassState";
import { FunctionEvent } from "./EVENT/FunctionEvent";
import { ClassEvent } from "./EVENT/ClassEvent";

function App() {
  return (
    <div className="App">
     {/* <FunctionComponents/> */}
     {/* <ClassComponent/> */}
     {/* <Parent/> */}
     {/* <MapComponent/> */}
     {/* <MainHook/> */}
     {/* <ClassState/> */}
     {/* <FunctionEvent/> */}
     <ClassEvent/>
    </div>
  );
}

export default App;
