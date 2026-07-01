import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    cardId: "card_001",
    type: "Virtual",
    status: "Active"
  });
}
