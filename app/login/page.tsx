"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = async () => {
const { error } = await supabase.auth.signInWithPassword({
email,
password,
});

if (error) {
  alert(error.message);
} else {
  alert("Login Successful");
}


};

return ( <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600"> <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"> <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
Login </h1>

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

    <button
      onClick={handleLogin}
      className="w-full bg-blue-600 text-white p-3 rounded-lg"
    >
      Login
    </button>
  </div>
</div>


);
}
