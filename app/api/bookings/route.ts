import { addBooking } from "@/lib/booking";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const id = Date.now().toString(); //simple ID
  addBooking({ ...data, id });
  return NextResponse.json({ success: true });
}
