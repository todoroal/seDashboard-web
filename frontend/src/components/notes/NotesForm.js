import React, {useState, useContext, useEffect, Fragment} from 'react'
import NoteContext from '../../context/notes/noteContext';





 const NotesForm = () => {
    const noteContext = useContext(NoteContext);

    const {addNote, current} = noteContext
    let noteText = '';

    const cc = event =>{
        event.preventDefault();
        noteText = event.target.value
    }
    
    const onSubmit = event => {
        event.preventDefault();
        addNote(noteText);
    }

    return (
        <div className="m form-group note-input-wrapper">
    
       
        <form onSubmit={onSubmit}>
                <textarea placeholder="*enter your note here...." rows="8" cols="50" name="note" onChange={cc} required></textarea>
                <div>
                    <input type="submit" value="Add Note" name="note" className="btn btn-primary"></input>
                </div>
        </form>
        </div>
    )
}

export default NotesForm;
