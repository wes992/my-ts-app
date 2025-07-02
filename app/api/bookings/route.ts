import { addBooking, getBookings } from "@/lib/booking";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const id = Date.now().toString(); //simple ID
  addBooking({ ...data, id });
  return NextResponse.json({ success: true });
}
export async function GET() {
  const results = getBookings();

  console.log("result in GET API", results);
  return NextResponse.json(results);
}
