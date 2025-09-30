import { HashtagIcon } from "@heroicons/react/24/outline";
import { fetchTopic, fetchQuestions } from "@/lib/data";
import { AskQuestion } from "@/components/AskQuestion";
import { Question } from "@/components/Question";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Simulate loading
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const topic = await fetchTopic(id);

  if (!topic) {
    notFound();
  }

  const questions = await fetchQuestions(id);

  return (
    <div className="w-full">
      <h1 className="text-3xl font-black flex items-center mb-4">
        <HashtagIcon className="h-6 w-6 mr-2" />
        {topic.title}
      </h1>

      <AskQuestion topic={id} />

      <div className="flex flex-col">
        {questions.length > 0 ? (
          questions.map((question) => (
            <Question
              key={question.id}
              id={question.id}
              text={question.title}
              votes={question.votes}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center py-8">
            No questions yet. Be the first to ask!
          </p>
        )}
      </div>
    </div>
  );
}