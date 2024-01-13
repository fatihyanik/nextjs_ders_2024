import Link from 'next/link'
import {FiPlusCircle, FiHome} from "react-icons/fi"

const Navbar = () => {
  return (
    <nav className='flex gap-6 justify-between items-center cursor-pointer'>
        <Link 
        className='flex items-center gap-1'
        href={'/'}>
            <FiHome /> <span>Home</span>
        </Link>
        <Link 
        className='flex items-center gap-1'
        href={'/create'}>
            <FiPlusCircle /> <span>Create</span>
        </Link>
    </nav>
  )
}

export default Navbar