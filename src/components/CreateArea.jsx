import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';    
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {

    const [isExpand , setExpand] = useState(false);
    const [note , setNote] = useState({
        title : "",
        content : ""
    });

    function handleChange(event){
       const {name , value} = event.target;

       setNote(prevValue => {
           return {
               ...prevValue,
               [name] : value,
           }
       })
    }
    function submitNote(event){
        props.onAdd(note);
        setNote({  title : "",
        content : ""});
        event.preventDefault();
    }
    function expand(){
        setExpand(true);
    }

  return (
    <div>
      <form  className="create-note">
      {isExpand && 
        (<input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        )}
        <textarea name="content" onClick={expand} onChange={handleChange} value={note.content}  placeholder="Take a note..." rows={isExpand ? 3 : 1} />
        <Fab onClick={submitNote}><AddIcon /></Fab> 
      </form>
    </div>
  );
}

export default CreateArea;
