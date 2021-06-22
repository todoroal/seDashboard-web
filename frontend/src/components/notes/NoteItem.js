import React, { useContext } from 'react'
import NoteContext from '../../context/notes/noteContext';
import PropType from 'prop-types';

//import contactContext from '../../context/contact/contactContext';



const NoteItem = (propNote) => {
    const noteContext = useContext(NoteContext)

    const {setCurrent} = noteContext;
    const data = propNote.noteInfo;
    console.log(data)
    const onDelete = () =>{
        noteContext.deleteNote(data._id);
    }


    return (
        <div className="note-wrapper">
    
                <div className="note-text">
                    <p>{data.note}</p>
                </div>
               
                   
                <div className="note-remove">
                    <button className="btn badge badge-dark">
                        <i class="fas fa-pen"></i>
                    </button>
                    <button class="btn badge badge-dark" onClick={onDelete}>
                        <i class="fas fa-times"></i>
                    </button>
                </div>
        </div>
    )
}

NoteItem.propTypes = {
    //contact: PropType.object.isRequired
    
}

export default NoteItem
