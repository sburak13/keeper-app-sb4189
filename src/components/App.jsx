import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Form from "./Form";
import notes from "../notes";

function App() {
  const [notesArr, setNotesArr] = React.useState(notes);

  function createNotes() {
    console.log("Creating notes:", notesArr);
    return notesArr.map((note) => (
      <Note
        key={note.key}
        id={note.id}
        title={note.title}
        content={note.content}
        onDelete={deleteNote}
      />
    ));
  }

  function addNote(title, content) {
    const newNote = {
      key: notesArr.length + 1,
      id: notesArr.length + 1,
      title: title,
      content: content,
    };

    console.log("Adding note:", newNote);
    setNotesArr((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotesArr((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  return (
    <div>
      <Header />
      <Form onAdd={addNote} />
      <dl>{createNotes()}</dl>
      <Footer />
    </div>
  );
}

export default App;
