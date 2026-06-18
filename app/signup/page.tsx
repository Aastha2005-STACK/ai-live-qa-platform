"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [role, setRole] = useState("Student");

const handleSignup = async () => {
const { error } = await supabase.auth.signUp({
email,
password,
options: {
data: {
full_name: name,
role: role,
},
},
});


if (error) {
  alert(error.message);
} else {
  alert("Signup Successful");
}


};

return ( <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600"> <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"> <h1 className="text-3xl font-bold text-center text-purple-600 mb-6">
Create Account </h1>


    <input
      type="text"
      placeholder="Full Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="w-full border p-3 rounded-lg mb-4"
    />

    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full border p-3 rounded-lg mb-4"
    />

    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full border p-3 rounded-lg mb-4"
    />

    <select
      value={role}
      onChange={(e) => setRole(e.target.value)}
      className="w-full border p-3 rounded-lg mb-4"
    >
      <option>Student</option>
      <option>Teacher</option>
    </select>

    <button
      onClick={handleSignup}
      className="w-full bg-purple-600 text-white p-3 rounded-lg"
    >
      Sign Up
    </button>
  </div>
</div>


);
}
