'use client'

const User = ({ params }) => {
  //console.log(params);
  return (
    <div>
      <h1>Info about {params.user}</h1>
    </div>
  )
}

export default User