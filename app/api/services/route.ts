import { NextResponse } from "next/server";
import { services } from "../../../data/services";
import { Service } from "../../../types/service";

export async function GET() {
  return NextResponse.json(services);
}
