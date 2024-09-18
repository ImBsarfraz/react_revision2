import React from "react";
import { FunctionComponents } from "./components/FunctionComponent";
import { ClassComponent } from "./components/ClassComponent";
import { Parent } from "./components/PropsExample/Parent";
import { MapComponent } from "./components/MapMethod/MapComponent";
import { MainHook } from "./HOOK/MainHook";
import { ClassState } from "./HOOK/ClassState";

function App() {
  return (
    <div className="App">
     {/* <FunctionComponents/> */}
     {/* <ClassComponent/> */}
     {/* <Parent/> */}
     {/* <MapComponent/> */}
     {/* <MainHook/> */}
     <ClassState/>
    </div>
  );
}

export default App;
