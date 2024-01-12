import connectMongoDB from "../../libs/connect";
import Link from "next/link";
import Todo from "../../models/todoModel";
import Delete from "@/app/components/Delete";

async function getTodos() {
  try {
    await connectMongoDB();
    const todos = await Todo.find({});
    if (!todos) {
      throw new Error("Couldn't fetch the todos.");
    }
    return todos;
  } catch (error) {
    console.log("Error while fetching the todos.");
  }
}

export default async function Home() {
  const data = await getTodos();
  console.log(data);
  return (
    <div className="wrapper">
      <div className="container">
        <h1>Todo App</h1>
        <span className="plusbtn">
          <Link href={"/addTodo"}>ADD</Link>
        </span>
        {!!data?.length && (
          <div className={"todo-list"}>
            {data?.map((todo) => {
              return (
                <div className={"list"} key={todo}>
                  <li>{todo.description}</li>
                  <div className="iconWrapper">
                    <Delete id={todo._id.toString()} />
                    <span>
                      <Link
                        href={{
                          pathname: `/update/${todo._id}`,
                          query: { description: todo.description },
                        }}
                      >
                        Edit
                      </Link>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}