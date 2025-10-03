import { notFound } from "next/navigation";
import { AnswerQuestion } from "@/components/AnswerQuestion";
import { Answer } from "@/components/Answer";
import { fetchQuestion, fetchAnswers } from "@/lib/data";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Simulate loading
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const question = await fetchQuestion(id);

  if (!question) {
    notFound();
  }

  const answers = await fetchAnswers(id);

  // Sort answers to show accepted answer first
  const sortedAnswers = answers.sort((a, b) => {
    const aIsAccepted = question.answer_id === a.id;
    const bIsAccepted = question.answer_id === b.id;
    if (aIsAccepted && !bIsAccepted) return -1;
    if (!aIsAccepted && bIsAccepted) return 1;
    return 0;
  });

  return (
    <div className="w-full">
      <h1 className="text-3xl font-black mb-4">{question.title}</h1>

      <AnswerQuestion questionId={id} />

      <div className="flex flex-col">
        {sortedAnswers.length > 0 ? (
          sortedAnswers.map((answer) => (
            <Answer
              key={answer.id}
              id={answer.id}
              text={answer.answer}
              questionId={id}
              isAccepted={question.answer_id === answer.id}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center py-8">
            No answers yet. Be the first to answer!
          </p>
        )}
      </div>
    </div>
  );
}