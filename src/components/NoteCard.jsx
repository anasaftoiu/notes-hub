import { supabase } from "../lib/supabase";

export default function NoteCard({note, onChange}){
  async function deleteNote() {
    await supabase.from("notes").delete().eq("id",note.id);
    onChange();
  }

  return(
    <div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={deleteNote}>Delete</button>
    </div>
  );
}