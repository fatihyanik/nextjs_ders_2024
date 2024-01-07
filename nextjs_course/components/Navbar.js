'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname();
    console.log(pathName);
    return (
        <div>
            {pathName === '/login/loginadmin' ? (
                <li>
                    <Link href='/login/loginadmin'>Login Admin</Link>
                </li>
            ) : (
                <ul className="login-menu border bg-green-400">
                    <li>
                        <Link href='/login/loginuser'>Login Regular User</Link>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default Navbar