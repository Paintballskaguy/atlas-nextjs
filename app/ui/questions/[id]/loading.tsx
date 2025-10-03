const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-linear-to-r before:from-transparent before:via-white/60 before:to-transparent";

function AnswerSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
      <div className="flex items-center w-full">
        <div className="min-w-0 w-full">
          <div className="h-5 w-full rounded-md bg-gray-200" />
        </div>
      </div>
      <div className="mt-2 h-8 w-8 rounded-full bg-gray-200 ml-4" />
    </div>
  );
}

export default function Loading() {
  return (
    <div
      className={`${shimmer} relative flex w-full flex-col overflow-hidden`}
    >
      <h1 className="text-3xl font-black flex items-center mb-4">
        <div className="h-8 w-96 rounded-md bg-gray-200" />
      </h1>

      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-1 mb-4">
        <div className="bg-white px-2 py-2">
          <div className="h-12 w-full rounded-md bg-gray-200" />
        </div>
      </div>

      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-1">
        <div className="bg-white px-6">
          <AnswerSkeleton />
          <AnswerSkeleton />
          <AnswerSkeleton />
        </div>
      </div>
    </div>
  );
}