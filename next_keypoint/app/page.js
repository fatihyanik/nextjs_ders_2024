'use client'

import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter();
  const handleRoute = (page) => {
    router.push(page)
  }
  return (
    <div>
      <button onClick={()=> handleRoute('about')}>Go to about page</button><br/>
      <button onClick={()=> handleRoute('login')}>Go to login page</button><br/>
      <button onClick={()=> handleRoute('settings')}>Go to settings page</button><br/>
    </div>
  )
}

export default Home