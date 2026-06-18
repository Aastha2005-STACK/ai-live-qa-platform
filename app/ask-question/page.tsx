"use client";

import { useState } from "react";

export default function AskQuestion() {

 const [question, setQuestion] = useState("");

 const submitQuestion = async () => {

   await fetch("/api/ask", {
     method: "POST",
     body: JSON.stringify({
       question
     })
   });

 };

 return (
   <>
    <textarea
      value={question}
      onChange={(e)=>setQuestion(e.target.value)}
    />

    <button onClick={submitQuestion}>
      Ask Question
    </button>
   </>
 );
}