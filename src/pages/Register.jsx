import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Register(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    await supabase.auth.signUp({email,password});
    alert("Check email");
  }

  return(
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input onChange={e=>setEmail(e.target.value)} />
      <input type="password" onChange={e=>setPassword(e.target.value)} />
      <button>Register</button>
    </form>
  );
}