export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl shadow bg-white">
          <h2 className="text-xl font-bold">Sessions</h2>
          <p>12 Active Sessions</p>
        </div>

        <div className="p-6 rounded-xl shadow bg-white">
          <h2 className="text-xl font-bold">Questions</h2>
          <p>156 Questions Asked</p>
        </div>

        <div className="p-6 rounded-xl shadow bg-white">
          <h2 className="text-xl font-bold">AI Summaries</h2>
          <p>8 Summaries Generated</p>
        </div>
      </div>
    </div>
  );
}