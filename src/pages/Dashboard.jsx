import { useEffect,useState } from "react";
import { supabase } from "../lib/supabase";
import NoteForm from "../components/NoteForm";
import NoteCard from "../components/NoteCard";

export default function Dashboard({ user }){
  const[notes, setNotes] = useState([]);

  async function loadNotes() {
    const { data } = await supabase
    .from("notes")
    .select("*")
    .order("created_at", {ascending: false });
    setNotes(data);
  }

  useEffect(()=>{
    loadNotes();
  },[]);

  return(
    <>
    <h1>My Notes</h1>
    <NoteForm onAdd={loadNotes} user={user}/>
    {notes.map(note =>(
      <NoteCard key={notes.id} note={note} onChange={loadNotes} />
    ))}
    </>
  );
} 