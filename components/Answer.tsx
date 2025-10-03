import { CheckIcon } from "@heroicons/react/24/outline";
import { markAsAccepted } from "@/lib/actions";

type AnswerProps = {
  id: string;
  text: string;
  questionId: string;
  isAccepted: boolean;
};

export function Answer({ id, text, questionId, isAccepted }: AnswerProps) {
  return (
    <div className={`flex items-center border-l border-r border-t border-atlas-white-300 p-6 first:rounded-t-md last:rounded-b-md last:border-b ${isAccepted ? 'bg-green-50' : ''}`}>
      <p className="text w-full text-left">{text}</p>
      <form action={markAsAccepted}>
        <input type="hidden" name="answerId" value={id} />
        <input type="hidden" name="questionId" value={questionId} />
        <button
          type="submit"
          className={`h-8 w-8 min-w-[2rem] rounded-full ring-gray-200 ${
            isAccepted 
              ? 'bg-green-500 text-white' 
              : 'hover:text-green-500 active:bg-green-500 active:text-white active:outline-none active:ring-2 active:ring-green-500'
          }`}
          disabled={isAccepted}
        >
          <CheckIcon />
        </button>
      </form>
    </div>
  );
}