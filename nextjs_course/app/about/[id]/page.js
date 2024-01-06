import { redirect } from "next/navigation"

const ID = ({ params }) => {
    //console.log(params.id);
    if (params.id = 4) {
        redirect("/login")
    }
    return (
        <div>ID:{params.id}</div>
    )
}

export default ID