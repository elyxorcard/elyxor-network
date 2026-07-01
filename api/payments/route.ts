import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    success: true,
    paymentId: "pay_001",
    amount: 250,
    currency: "USD",
    status: "completed"
  });
}
