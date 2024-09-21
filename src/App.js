import React from "react";
import { FunctionComponents } from "./components/FunctionComponent";
import { ClassComponent } from "./components/ClassComponent";
import { Parent } from "./components/PropsExample/Parent";
import { MapComponent } from "./components/MapMethod/MapComponent";
import { MainHook } from "./HOOK/MainHook";
import { ClassState } from "./HOOK/ClassState";
import { FunctionEvent } from "./EVENT/FunctionEvent";
import { ClassEvent } from "./EVENT/ClassEvent";
import { LifecycleMain } from "./LIFECYCLE METHODS/LifecycleMain";

function App() {
  return (
    <div className="App">
     {/* <FunctionComponents/> */}
     {/* <ClassComponent/> */}
     {/* <Parent/> */}
     {/* <MapComponent/> */}
     {/* <ClassState/> */}
     {/* <FunctionEvent/> */}
     {/* <ClassEvent/> */}
     {/* <LifecycleMain/> */}
     <MainHook/>
    </div>
  );
}

export default App;
