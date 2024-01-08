import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({ success: "hello this message is succesfully delivered" })
}