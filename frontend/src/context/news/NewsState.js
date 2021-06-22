import React, { useContext, useEffect, Fragment,useReducer } from 'react'
import axios from 'axios';
import NewsContext from './newsContext';
import NewsReducer from './newsReducer';
import {
    GET_NEWS
} from '../types'


const NewsState = props =>{
    const initialState ={
      headline: [],
      thumbnail: [],
      link: [],
      loading: true
    };
    const [state, dispatch] = useReducer(NewsReducer, initialState);

    const getNews = async () =>{
      try {
        const res = await axios.get('/api/dashboard/standardFeed');
        console.log(res, 'res hourly')
        dispatch({
            type: GET_NEWS,
            payload: res.data
        })

        } catch (err) {
          console.error(err.message);
         // res.status(500).send('Server Error');
        }
  }


    return(
        <NewsContext.Provider value={{
            hradline: state.headline,
            thumbnail: state.thumbnail,
            link: state.link,
            loading: state.loading,
            getNews
           }}>
            {props.children}

        </NewsContext.Provider>
    ) 

}

export default NewsState;