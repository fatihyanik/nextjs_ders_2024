import { users } from "@/app/util/db";
import { NextResponse } from "next/server";

// 2. Get Specific User
export async function GET(_, res) {
    const { id } = await res.params;
    const user = users.filter((u) => u.id === id);
    return NextResponse.json({ user });
}

// 3. Login
export async function POST(req, res) {
    let { name, email, password } = await req.json();
    const { id } = await res.params

    const { name: uName, email: uEmail, password: uPassword } = users.find((u) => u.id == id);

    if (uName == name && uEmail == email && uPassword == password) {
        return NextResponse.json({ result: "Successfully logged in" })
    } else if (!name || !email || !password) {
        return NextResponse.json({ result: "Please fill all the input field" })
    } else {
        return NextResponse.json({ result: "Invalid Credentials" })
    }

}