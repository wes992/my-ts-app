import { login } from "@/lib/login";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  // Simulate a successful login
  const result = await login(data.username, data.password);

  if (result) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json(
      { success: false, error: "Invalid credentials" },
      { status: 401 }
    );
  }
}
