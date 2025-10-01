import { addQuestion } from "@/lib/actions";

export function AskQuestion({ topic }: { topic: string }) {
  return (
    <form className="relative my-8" action={addQuestion}>
      <input type="hidden" name="topic_id" value={topic} />
      <input
        type="text"
        name="title"
        placeholder="Ask a question..."
        className="w-full rounded-md border border-gray-200 py-3 pl-4 pr-28 text-sm outline-2 placeholder:text-gray-500"
        required
      />
      <button
        type="submit"
        className="absolute right-2 top-2 flex h-10 w-24 items-center justify-center rounded-md border bg-secondary px-4 text-sm text-white hover:bg-primary focus:bg-secondary"
      >
        Ask
      </button>
    </form>
  );
}