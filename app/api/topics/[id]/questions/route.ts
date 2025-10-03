import { fetchQuestions } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const questions = await fetchQuestions(id);
    
    // Map to return id, title, topic_id, votes
    const formattedQuestions = questions.map(question => ({
      id: question.id,
      title: question.title,
      topic_id: question.topic_id,
      votes: question.votes
    }));
    
    return NextResponse.json(formattedQuestions);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch questions" },
      { status: 500 }
    );
  }
}