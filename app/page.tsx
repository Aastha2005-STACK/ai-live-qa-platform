import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">

      <section className="max-w-7xl mx-auto px-6 py-24 text-center">

        <h1 className="text-6xl font-bold mb-6">
          AI-Powered Smart Live Q&A Platform
        </h1>

        <p className="text-xl max-w-3xl mx-auto text-gray-200">
          Interactive learning platform where students ask questions,
          teachers answer them, and AI organizes discussions intelligently.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/ask-question"
            className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold"
          >
            Ask Question
          </Link>

          <Link
            href="/dashboard"
            className="border border-white px-6 py-3 rounded-xl"
          >
            Dashboard
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">

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
              Important questions are highlighted first using AI.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur">
            <h2 className="text-2xl font-bold mb-3">
              📝 AI Summary
            </h2>

            <p>
              Generate session summaries automatically after discussions.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}