import { updateTodo } from "@/app/serverActions/actions";

const page = ({ params, searchParams }) => {
    return (
        <div className="addTodo">
            <form action={updateTodo}>
                <span>Current Todo = {searchParams?.description}</span>
                <input
                    type="text"
                    name={"description"}
                    placeholder={"Enter updated todo"}
                />
                <input type="hidden" name={"id"} value={params.id} readOnly />
                <button className="update">Update Todo</button>
            </form>
        </div>
    );
};
export default page;