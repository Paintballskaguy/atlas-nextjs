import CreateTopicForm from "@/components/CreateTopicForm";

export default function Page() {
  return (
    <div className="w-full max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Create New Topic</h1>
      <CreateTopicForm />
    </div>
  );
}