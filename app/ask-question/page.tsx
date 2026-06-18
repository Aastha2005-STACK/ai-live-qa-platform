"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AskQuestionPage() {
const [question, setQuestion] = useState("");
const [category, setCategory] = useState("");

const handleSubmit = async () => {
if (!question) {
alert("Please enter a question");
return;
}


let detectedCategory = "General";

if (question.toLowerCase().includes("react")) {
  detectedCategory = "React";
} else if (question.toLowerCase().includes("javascript")) {
  detectedCategory = "JavaScript";
} else if (question.toLowerCase().includes("python")) {
  detectedCategory = "Python";
}

setCategory(detectedCategory);

const { error } = await supabase.from("questions").insert([
  {
    question,
    category: detectedCategory,
  },
]);

if (error) {
  alert(error.message);
} else {
  alert("Question Submitted Successfully");
  setQuestion("");
}


};

return ( <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6"> <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl"> <h1 className="text-3xl font-bold mb-6">
Ask a Question </h1>


    <textarea
      value={question}
      onChange={(e) => setQuestion(e.target.value)}
      placeholder="Type your question here..."
      className="w-full border p-4 rounded-lg mb-4"
      rows={5}
    />

    {category && (
      <div className="mb-4 p-3 bg-blue-100 rounded-lg">
        AI Category: <strong>{category}</strong>
      </div>
    )}

    <button
      onClick={handleSubmit}
      className="w-full bg-blue-600 text-white p-3 rounded-lg"
    >
      Submit Question
    </button>
  </div>
</div>


);
}
