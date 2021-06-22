import React, { useContext, useEffect, Fragment,useReducer } from 'react'
import axios from 'axios';
import NoteContext from './noteContext';
import NoteReducer from './noteReducer';
import { ADD_NOTE, GET_NOTES, DELETE_NOTE, CLEAR_CURRENT, SET_CURRENT} from '../types'

const NoteState = props =>{
    const initialState ={
        notes: null,
        current: null,
    };
    const [state, dispatch] = useReducer(NoteReducer, initialState);


    //get Notes
    const getNotes = async () =>{
        try {
            const res = await axios.get('/api/notes');
            console.log(res.data)
            dispatch({
                type: GET_NOTES,
                payload: res.data
            })

          } catch (err) {
            console.error(err.message);
          }
    }

    //Add Note
    const addNote = async(data) =>{
        const config = {
            headers: {
                'Content-Type' :'application/json'
            }
           };
           try {
            const note={
                note: data
            }
             const res = await axios.post('api/notes',note, config);
             dispatch({
                 type: ADD_NOTE,
                 payload: res.data
             })
           } catch (e) {
               console.error(e);             
           }
    }

    //Delete Note
    const deleteNote = async(id) =>{
           try {
            await axios.delete(`/api/notes/${id}`);
               dispatch({
                   type: DELETE_NOTE,
                   payload: id
               })
             
           } catch (e) {             
           }
    }

    //Set Current note (needed for edit)

    const setCurrent = (note) => {
        dispatch({ type: SET_CURRENT, payload: note });
    };


    const clearCurrent = () =>{
        dispatch({type: CLEAR_CURRENT})
    }


    return(
        <NoteContext.Provider value={{
            notes: state.notes,
            current: state.current,
            getNotes,
            addNote,
            deleteNote,
            clearCurrent,
            setCurrent
           }}>
            {props.children}

        </NoteContext.Provider>
    ) 

}

export default NoteState;