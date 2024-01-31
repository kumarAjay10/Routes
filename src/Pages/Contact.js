import React from "react";
import { useNavigate } from "react-router-dom";



const Contact = ({count})=>{

  let navigate = useNavigate()



    return(
        <div>
             <h1>Contact</h1>
             <h2>value of count: {count}</h2>
             <p>This is my Contact page</p>
             <button onClick={()=>navigate("/blog")}>go to blog</button>
        </div>
    )
}

export default Contact;