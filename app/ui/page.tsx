import { Topic } from "@/components/Topic";
import { fetchTopics } from "@/lib/data";

export default async function Page() {
  const topics = await fetchTopics();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Topics</h1>
      <div className="flex flex-col">
        {topics.map((topic) => (
          <Topic key={topic.id} id={topic.id} text={topic.title} />
        ))}
      </div>
    </div>
  );
}