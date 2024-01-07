import Image from "next/image"
import AslanImage from "@/app/public/aslan.jpg";

const Users = () => {
  return (
    <div>
        {/* <Image src={AslanImage} alt="Leon Img" width={1000} height={1000} /> */}
        <Image
        src="https://images.unsplash.com/photo-1698417749491-72bba47caf07?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="nature image"
        width={1800}
        height={1800}
      />
    </div>
  )
}

export default Users

