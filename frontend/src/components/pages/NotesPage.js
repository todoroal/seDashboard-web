import React,{useContext,useEffect }from 'react'
import Notes from '../notes/Notes'
import AuthContext from '../../context/auth/authContext';
import NoteContext from '../../context/notes/noteContext';
import NotesForm from '../notes/NotesForm';

 const NotesPage = () => {
    //const authContext = useContext(AuthContext);
    //const noteContext = useContext(NoteContext);

    if(localStorage.token){
        //authContext.loadUser();
        //noteContext.getNotes();
        //loadDash();
    }
    return (
        <div className='grid-2'>
            <div>
                <NotesForm></NotesForm>
            </div>
            <div className='test-class'>
                <Notes></Notes>
            </div>
        
        </div>
    )
}

export default NotesPage