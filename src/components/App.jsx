import React, { useState } from "react";
import ReactDOM from "react-dom";
// import notes from "../notes";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";
//import notes from "../notes";



function App(){
  const [note , setNotes] = useState([])

  function addNote(newNote){
    setNotes(prevValue => {
      return [...prevValue , newNote]
    });
  }
  function deleteNote(id){
    setNotes(prevValue => {
      return prevValue.filter((noteItem,index) =>
      {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {note.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;