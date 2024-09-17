import React from "react";
import { FunctionComponents } from "./components/FunctionComponent";
import { ClassComponent } from "./components/ClassComponent";
import { Parent } from "./components/PropsExample/Parent";
import { MapComponent } from "./components/MapMethod/MapComponent";

function App() {
  return (
    <div className="App">
     {/* <FunctionComponents/> */}
     {/* <ClassComponent/> */}
     <Parent/>
     {/* <MapComponent/> */}
    </div>
  );
}

export default App;
