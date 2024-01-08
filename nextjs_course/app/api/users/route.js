import { NextResponse } from "next/server";

export async function POST(req, res) {
    // let data = await req.json();
    // console.log(data);

     let {email, password} = await req.json();
    // console.log(email, password);

    if (!email || !password) {
        return NextResponse.json(
            { error: "resquired filed not found" },
            { status: 400 }
        )
    }

    return NextResponse.json({ res: "Credentials verified, User succesfully logged in." });
}