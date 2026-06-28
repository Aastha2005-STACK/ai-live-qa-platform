"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SessionPage() {
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    const { data, error } = await supabase
      .from("questions")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setQuestions(data);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8 text-blue-700">
        🎥 Live Q&A Session
      </h1>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold">
          React Workshop
        </h2>

        <p className="text-gray-600 mt-2">
          Students can ask questions during the live session.
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-6">
        📋 Questions
      </h2>

      {questions.length === 0 ? (
        <p>No questions yet.</p>
      ) : (
        questions.map((q) => (
          <div
            key={q.id}
            className="bg-white rounded-xl shadow p-5 mb-4"
          >
            <h3 className="font-bold text-lg">
              {q.question}
            </h3>

            <p className="text-blue-600 mt-2">
              Category: {q.category}
            </p>

            <div className="flex gap-3 mt-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                👍 Upvote
              </button>

              <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                👎 Downvote
              </button>
            </div>
          </div>
        ))
      )}

      <div className="mt-10">
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
          🤖 Generate AI Summary
        </button>
      </div>

    </div>
  );
}