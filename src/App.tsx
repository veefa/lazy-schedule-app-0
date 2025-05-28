import React from "react";
import Home from "./compoments/Home";
import Navbar from "./compoments/Navbar";
import "./index.css"



 
const App: React.FC = () => {
  return (
    <div className="bg-slate-400 min-h-screen">
      <h1></h1>
      <Navbar/>
        <Home/>
    </div>
  );
}
 
export default App;