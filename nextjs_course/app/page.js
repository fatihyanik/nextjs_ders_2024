'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const navigate= (page)=>{
    router.push(page);
  }

  return (
    <section>
      <h1>useRouter</h1>
      <Link className="border px-2 py-4" href='/projects'>Projects</Link>
      <button className="border px-2 py-4" onClick={()=>navigate('about')}>Go To About Page</button>
      <button className="border px-2 py-4" onClick={()=>navigate('login')}>Go To Login Page</button>

    </section>
  )
}

export default Home;