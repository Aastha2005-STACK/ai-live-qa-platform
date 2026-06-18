"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function CreateSessionPage() {
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");

const handleCreateSession = async () => {
const { error } = await supabase.from("sessions").insert([
{
title,
description,
},
]);


if (error) {
  alert(error.message);
} else {
  alert("Session Created Successfully");
  setTitle("");
  setDescription("");
}


};

return ( <div className="min-h-screen flex items-center justify-center bg-gray-100"> <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg"> <h1 className="text-3xl font-bold mb-6">
Create Session </h1>


    <input
      type="text"
      placeholder="Session Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="w-full border p-3 rounded-lg mb-4"
    />

    <textarea
      placeholder="Session Description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      className="w-full border p-3 rounded-lg mb-4"
      rows={4}
    />

    <button
      onClick={handleCreateSession}
      className="w-full bg-blue-600 text-white p-3 rounded-lg"
    >
      Create Session
    </button>
  </div>
</div>


);
}
