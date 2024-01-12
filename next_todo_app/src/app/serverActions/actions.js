"use server";
import connectMongoDB from "../../../libs/connect";
import Todo from "../../../models/todoModel";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
export async function addTodo(formData) {
    try {
        const description = formData.get("description");
        await connectMongoDB();
        await Todo.create({ description });
    } catch (e) {
        return { message: "Failed to create todo" };
    } finally {
        redirect("/");
    }
}

export async function updateTodo(formData) {
    try {
        const id = formData.get("id");
        const description = formData.get("description");
        await connectMongoDB();
        await Todo.findByIdAndUpdate({ _id: id }, { description }, { new: true });
    } catch (e) {
        return { message: "Failed to update todo" };
    } finally {
        redirect("/");
    }
}

export async function deleteTodo(formData) {
    try {
        const id = formData.get("id");
        await connectMongoDB();
        await Todo.findByIdAndDelete({ _id: id });
        revalidatePath("/");
    } catch (e) {
        return { message: "Failed to delete todo" };
    }
}