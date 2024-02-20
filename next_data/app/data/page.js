// 'use client'

// import React, { useEffect, useState } from "react"

// const Data = () => {
//     const [product, setProduct] = useState([])

//     useEffect(() => {
//         async function fetchData() {
//                 let data = await fetch("https://jsonplaceholder.typicode.com/posts");
//                 data = await data.json();
//                 setProduct(data);
//                 console.log(data);
//         }
//         fetchData();
//     }, []);

//     return (
//         <div>
//             {
//                 product.length > 0 ? (
//                     product.map((p) => (
//                         <div key={p.id}>
//                             <h1>{p.title}</h1>
//                         </div>
//                     ))
//                 ) : (
//                     <p>Loading...</p>
//                 )
//             }
//         </div>
//     );
// }

// export default Data;

async function fetchData() {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts");
    data = await data.json();
    //console.log(data);
    return data
}

async function Page() {
    let posts = await fetchData();
   // console.log(posts);
    return (
        <div>
            {posts?.map((p)=>(
                <p key={p.id}> {p.title}</p>
            ))}
        </div>
    )
}

export default Page;
