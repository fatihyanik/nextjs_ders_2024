'use client'
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <section>
      <h1>useRouter</h1>
      <button className="border px-2 py-4" onClick={()=>router.push("about")}>Go To About Page</button>

    </section>
  )
}

export default Home;