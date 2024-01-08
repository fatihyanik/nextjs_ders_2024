import React from 'react'

const Page = () => {
    console.log(process.env.MONGO_URI);
    console.log(process.env.JWT_SECRET);
    console.log(process.env.NODE_ENV);
  return (
    <div>
        {process.env.MONGO_URI ? (
            <h1>DB Succesfully Connected</h1>
        )    : (
            <h1>404 DB Not Found</h1>
        )
    }
    </div>
  )
}

export default Page