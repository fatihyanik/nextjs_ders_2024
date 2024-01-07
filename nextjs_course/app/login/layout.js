import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"


const layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default layout