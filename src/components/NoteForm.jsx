import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function NoteForm({user, onAdd}){
  const [title, setTitle] = useState("");
  const [content , setContent] = useState("");

  async function addNote(e) {
    e.preventDefault();
    await supabase.from("notes").insert({
      title,
      content,
      user_id: user.id,
    });
    setTitle("");
    setContent("");
    onAdd();
  }

  return (
    <form onSubmit={addNote}>
      <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)}/>
      <textare placeholder="Content" value={content} onChange={e=>setContent(e.target.value)} />
        <button>Add</button>
    </form>
  );
}