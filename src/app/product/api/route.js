import {NextResponse} from "next/server";

export async function GET() {
  return NextResponse.json({data: "This is API Message !"});
}
