import React,{useState} from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Navbar from "./Pages/Navbar"
import {Routes, Route} from "react-router-dom";


const App = ()=>{

  const[count,setCount]=useState(0);


  return(

    <div>
      <Navbar/>
    <Routes>
      <Route path="/home" element={<Home name="Ajay"/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Blog" element={<Blog count={count} setCount={setCount}/>}/>
      <Route path="/Contact" element={<Contact count={count}/>}/>
    </Routes>
    </div>
  )
}

export default App;

{/* <Home/>
<About/>
<Blog/>
<Contact/> */}
