import { NextResponse } from "next/server";
import { model } from "@/lib/gemini";

export async function POST(req: Request) {

 const body = await req.json();

 const result = await model.generateContent(
   `Categorize this question:
   ${body.question}`
 );

 return NextResponse.json({
   category: result.response.text()
 });
}