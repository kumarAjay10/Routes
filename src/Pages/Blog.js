import React from "react";
import { useNavigate } from "react-router-dom";



const Blog = ({count,setCount})=>{


const navigate=useNavigate()


    return(
        <div>
            <button onClick={()=>navigate(-1)}>back</button>
             <h1>Blog</h1>
             <p>This is my Blog page</p>
             <br/>
             <h2>count: {count}</h2>
             <button onClick={()=>setCount(count+1)}>inc</button>
             <button onClick={()=>setCount(count-1)}>dec</button>
             <button onClick={()=>setCount(0)}>reset</button>
        </div>
    )
}

export default Blog;