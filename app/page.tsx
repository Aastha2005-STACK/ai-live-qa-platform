export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6">
            AI-Powered Smart Live Q&A Platform
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Transform classroom learning with real-time questions,
            AI-powered categorization, smart prioritization,
            and interactive engagement.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold">
              Join Session
            </button>

            <button className="border border-white px-6 py-3 rounded-xl">
              Create Session
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur">
            <h2 className="text-2xl font-bold mb-3">
              🤖 AI Categorization
            </h2>
            <p>
              Automatically categorize questions into relevant topics.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur">
            <h2 className="text-2xl font-bold mb-3">
              📊 Smart Prioritization
            </h2>
            <p>
              AI highlights important and trending questions first.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur">
            <h2 className="text-2xl font-bold mb-3">
              📝 Session Summary
            </h2>
            <p>
              Generate AI-powered summaries after every session.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}