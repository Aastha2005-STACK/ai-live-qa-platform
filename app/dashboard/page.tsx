"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function Dashboard() {
  const [sessions, setSessions] = useState<any[]>([]);

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    const { data, error } = await supabase
      .from("sessions")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setSessions(data);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    alert("Logged Out");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-blue-700">
          AI Live Q&A Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Buttons */}
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

      {/* Dashboard Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-blue-600">📚 Sessions</h2>
          <p className="text-3xl font-bold mt-3">{sessions.length}</p>
          <p className="text-gray-500">Total Sessions</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-green-600">❓ Questions</h2>
          <p className="text-3xl font-bold mt-3">Live</p>
          <p className="text-gray-500">Questions Submitted</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-purple-600">
            🤖 AI Summary
          </h2>
          <p className="text-3xl font-bold mt-3">Ready</p>
          <p className="text-gray-500">AI Powered</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">
          📈 Recent Activity
        </h2>

        <ul className="space-y-3 text-lg">
          <li>✅ New session created</li>
          <li>❓ Student asked a question</li>
          <li>🤖 AI categorized questions</li>
          <li>📝 AI summary generated</li>
        </ul>
      </div>

      {/* Live Sessions */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6">
          🎥 Live Sessions
        </h2>

        {sessions.length === 0 ? (
          <p className="text-gray-500">
            No sessions available.
          </p>
        ) : (
          sessions.map((session) => (
            <div
              key={session.id}
              className="border rounded-xl p-5 mb-4 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold">
                {session.title}
              </h3>

              <p className="text-gray-600 mt-2">
                {session.description}
              </p>

              <div className="mt-4">
                <Link
                  href={`/session/${session.id}`}
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                >
                  Open Session →
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}