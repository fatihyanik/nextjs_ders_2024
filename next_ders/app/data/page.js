'use client'
import { useState, useEffect } from "react"


const Data = () => {

    const [post, setPost] = useState([]);

    useEffect(()=>{
       async function fetchData(){
            let data = await fetch("https://jsonplaceholder.typicode.com/posts");
            console.log(data);
            data = await data.json();
            console.log(data);
            setPost(data);
            console.log(data);
        }
        fetchData();
    },[]); 

  return (
    <div>
        {post.map(post => (
            <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        ))}
    </div>
  )
}

export default Data