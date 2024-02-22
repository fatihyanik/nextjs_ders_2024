const Page = () => {
  return (
    <div>
      {
        process.env.MONGODB_URI ? (
          <h1>DB Succesfully Connected</h1>
        ):(
          <h1>404 Db Not found</h1>
        )
      }
    </div>
  )
}

export default Page