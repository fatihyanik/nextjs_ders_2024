import { addTodo } from "@/app/serverActions/actions";
const page = () => {
    return (
        <div className="addTodo">
            <form action={addTodo}>
                <input
                    type={"text"}
                    name={"description"}
                    className={"form-input"}
                    placeholder={"Enter your todo"}
                />
                <button>Add Todo</button>
            </form>
        </div>
    );
};

export default page;