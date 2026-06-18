"use client";

import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function Dashboard() {
const handleLogout = async () => {
await supabase.auth.signOut();
alert("Logged Out");
};

return ( <div className="min-h-screen bg-gray-100 p-8"> <div className="flex justify-between items-center mb-8"> <h1 className="text-4xl font-bold">Dashboard</h1>


    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
    >
      Logout
    </button>
  </div>

  <div className="mb-8 flex gap-4">
    <Link
      href="/create-session"
      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
    >
      + Create Session
    </Link>

    <Link
      href="/ask-question"
      className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
    >
      Ask Question
    </Link>
  </div>

  <div className="grid md:grid-cols-3 gap-6">
    <div className="p-6 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">Sessions</h2>
      <p className="text-gray-600">12 Active Sessions</p>
    </div>

    <div className="p-6 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">Questions</h2>
      <p className="text-gray-600">156 Questions Asked</p>
    </div>

    <div className="p-6 rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-2">AI Summaries</h2>
      <p className="text-gray-600">8 Summaries Generated</p>
    </div>
  </div>

  <div className="mt-10 bg-white p-6 rounded-xl shadow">
    <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>

    <ul className="space-y-3">
      <li>✅ New session created</li>
      <li>❓ Student asked a question</li>
      <li>🤖 AI categorized questions</li>
      <li>📝 AI summary generated</li>
    </ul>
  </div>
</div>


);
}
