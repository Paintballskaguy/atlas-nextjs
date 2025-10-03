import { fetchAnswers } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const answers = await fetchAnswers(id);
    
    // Map to return id, answer, question_id
    const formattedAnswers = answers.map(answer => ({
      id: answer.id,
      answer: answer.answer,
      question_id: answer.question_id
    }));
    
    return NextResponse.json(formattedAnswers);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch answers" },
      { status: 500 }
    );
  }
}