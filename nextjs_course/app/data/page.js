async function fetchData(){
    let data = await fetch('https://jsonplaceholder.typicode.com/posts');
    data = await data.json();
    //console.log(data);
    return data
}

const Data = async () => {
    let products = await fetchData()
    //console.log(products);
  return (
    <ul>
        {products?.map((p)=>(
            <>
                <li className="border m-5 py-2 px-4" key={p.id}>{p.title}</li>
            </>
        ))}
    </ul>
  )
}

export default Data