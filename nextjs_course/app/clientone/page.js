'use client'

const ClientOne = () => {
    console.log('Hello from the (client componet)');
  return (
    <div>
        <button onClick={()=> alert("hello")}>Click me</button>
    </div>
  )
}

export default ClientOne