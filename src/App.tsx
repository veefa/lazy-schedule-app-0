import React from "react";
import Home from "./compoments/Home";
import Navbar from "./compoments/Navbar";
import About from "./compoments/About";
import Contact from "./compoments/Contact";
import "./index.css"



 
const App: React.FC = () => {
  

  return (
    <div className="bg-indigo-100 min-h-screen">
      <h1></h1>
      <Navbar/>
        <Home />
     <About />
      <Contact/>

    </div>
  );
}
 
export default App;