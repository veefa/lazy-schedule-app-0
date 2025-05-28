import React from "react";
import "./index.css"
import Home from "./compoments/Home";


 
const App: React.FC = () => {
  return (
    <div className="App">
      <h1>lazy-schedule-app</h1>
    
        <Home/>
    </div>
  );
}
 
export default App;