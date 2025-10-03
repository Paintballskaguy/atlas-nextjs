import { addAnswer } from "@/lib/actions";

export function AnswerQuestion({ questionId }: { questionId: string }) {
  return (
    <form className="relative my-8" action={addAnswer}>
      <input type="hidden" name="question_id" value={questionId} />
      <input
        type="text"
        name="answer"
        placeholder="Write your answer..."
        className="w-full rounded-md border border-gray-200 py-3 pl-4 pr-28 text-sm outline-2 placeholder:text-gray-500"
        required
      />
      <button
        type="submit"
        className="absolute right-2 top-2 flex h-10 w-24 items-center justify-center rounded-md border bg-secondary px-4 text-sm text-white hover:bg-primary focus:bg-secondary"
      >
        Submit
      </button>
    </form>
  );
}