import { useState } from "react";
import {supabase} from "../lib/supabase";

export default function Login({setUser}) {
  const [email, setEmail] = useState("");
  const [password , setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    const {data , error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if(!error) setUser(data.user);
  }

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
      <button>Login</button>
    </form>
  );
}