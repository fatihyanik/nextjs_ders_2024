import DeleteIcon from "./DeleteIcon";
import { deleteTodo } from "../serverActions/actions";
const Delete = ({ id }) => {
    return (
        <form action={deleteTodo}>
            <input type="hidden" name="id" value={id} />
            <button>
                <DeleteIcon className="icon" />
            </button>
        </form>
    );
};

export default Delete;