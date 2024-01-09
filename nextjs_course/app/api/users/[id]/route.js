import { users } from "@/app/util/db";
import { NextResponse } from "next/server";

// 2. Get Specific User
export async function GET(_, res) {
  const { id } = await res.params;
  const user = users.filter((u) => u.id === id);
  return NextResponse.json({ user });
}