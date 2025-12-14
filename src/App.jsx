import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

export default function App(){
  const[user, setUser] = useState(null);

  useEffect(()=> {
    supabase.auth.getUser().then(({data}) =>{
      setUser(data.user);
    });
  }, []);

  if(!user) return (
    <>
    <Login setUser={setUser}/>
    <Register/>
    </>
  );

  return <Dashboard user={user} />
}